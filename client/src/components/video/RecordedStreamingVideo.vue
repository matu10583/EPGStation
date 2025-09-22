<template>
    <div style="position: relative; width: 100%; height: 100%">
        <video ref="video" autoplay playsinline style="width: 100%; height: 100%; display: block"></video>
        <canvas ref="commentCanvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none"></canvas>
    </div>
</template>

<script lang="ts">
import BaseVideo from '@/components/video/BaseVideo';
import container from '@/model/ModelContainer';
import ISocketIOModel from '@/model/socketio/ISocketIOModel';
import IRecordedStreamingVideoState from '@/model/state/recorded/streaming/IRecordedStreamingVideoState';
import { Component, Prop, Watch } from 'vue-property-decorator';
import * as apid from '../../../../api';
import ICommentSender from '@/model/comment/ICommentSender';
import IRecordedApiModel from '@/model/api/recorded/IRecordedApiModel';

interface VideoSrcInfo {
    videoFileId: apid.VideoFileId;
    streamingType: string;
    mode: number;
    playPosition: number;
}

@Component({})
export default class RecordedStreamingVideo extends BaseVideo {
    @Prop({ required: true })
    public recordedId!: apid.RecordedId;

    @Prop({ required: true })
    public mode!: number;

    @Prop({ required: true })
    public videoFileId!: apid.VideoFileId;

    @Prop({ required: true })
    public streamingType!: string;

    private videoState = container.get<IRecordedStreamingVideoState>('IRecordedStreamingVideoState');
    private socketIoModel: ISocketIOModel = container.get<ISocketIOModel>('ISocketIOModel');
    private onUpdateStatusCallback = (async (): Promise<void> => {
        await this.updateVideoInfo();
    }).bind(this);
    private basePlayPosition: number = 0;
    private dummyPlayPosition: number | null = null; // setCurrentTime が呼ばれている間に再生位置として返すダミー値
    private pauseStateBeforeCurrentTime: boolean = false; // setCurrentTime が処理終了時に再生状態を復元するための値
    private lastUpdatePauseState: number = 0; // 最後に pauseStateBeforeCurrentTime を更新した時間
    private updateDurationTimerId: number | undefined; // 録画中の番組の動画長を更新するためのタイマー
    private setCurrentTimeTimerId: number | undefined; // setCurrentTime を大量に呼び出さないようにするためのタイマー
    private commentSender: ICommentSender = container.get('ICommentSender');

    public created(): void {
        // socket.io イベント
        this.socketIoModel.onUpdateState(this.onUpdateStatusCallback);
    }

    public async mounted(): Promise<void> {
        await this.videoState.clear();
        await this.updateVideoInfo();

        this.setIntervalPlayPosition();
        super.mounted();

        // 録画中の場合は duration が変化するので定期的に timeupdate を発行する
        if (this.videoState.isRecording() === true) {
            this.updateDurationTimerId = setInterval(() => {
                this.onTimeupdate();

                // 録画中でなくなったらタイマーを止める
                if (this.videoState.isRecording() === false) {
                    clearInterval(this.updateDurationTimerId);
                }
            }, 1000);
        }
        const playStartPosition = await this.getPlaybackPosition(this.recordedId);
        this.setCurrentTime(playStartPosition);
        await this.play();
    }

    protected onPause(): void {
        // APIへ再生位置保存
        this.savePlaybackPosition(this.getCurrentTime());
        super.onPause();
    }

    /**
     * socket.io での状態更新通知時処理
     * @return Promise<void>
     */
    private async updateVideoInfo(): Promise<void> {
        await this.videoState.fetchInfo(this.recordedId, this.videoFileId);
        if (this.videoState.isRecording() === false) {
            clearInterval(this.updateDurationTimerId);
        }
    }

    public async beforeDestroy(): Promise<void> {
        this.savePlaybackPosition(this.getCurrentTime());
        this.commentSender.resetSrc();
        // socket.io イベント
        this.socketIoModel.offUpdateState(this.onUpdateStatusCallback);

        this.removeIntervalPlayPosition();
        super.beforeDestroy();
    }

    /**
     * video 再生初期設定
     */
    protected initVideoSetting(): void {
        this.setSrc(
            this.createVideoSrc({
                videoFileId: this.videoFileId,
                streamingType: this.streamingType,
                mode: this.mode,
                playPosition: this.basePlayPosition,
            }),
        );
        this.commentSender.setSrc(this.recordedId, this);
        this.load();
    }

    /**
     * video src を生成する
     */
    private createVideoSrc(info: VideoSrcInfo): string {
        return `./api/streams/recorded/${info.videoFileId}/${info.streamingType}?mode=${info.mode}&ss=${info.playPosition}`;
    }

    /**
     * 動画の長さを返す (秒)
     * @return number
     */
    public getDuration(): number {
        return this.videoState.getDuration();
    }

    /**
     * 動画の現在再生位置を返す (秒)
     * @return number
     */
    public getCurrentTime(): number {
        if (this.dummyPlayPosition !== null) {
            return this.dummyPlayPosition;
        }

        return this.video === null ? 0 : this.basePlayPosition + super.getCurrentTime();
    }

    /**
     * 再生位置設定
     * @param time: number (秒)
     */
    public setCurrentTime(time: number): void {
        if (this.video === null) {
            return;
        }

        // エンコード済み範囲か
        if (time >= this.basePlayPosition && time <= this.basePlayPosition + super.getDuration()) {
            super.setCurrentTime(time - this.basePlayPosition);
            this.onTimeupdate();

            return;
        }

        const now = new Date().getTime();
        if (this.dummyPlayPosition === null && now - this.lastUpdatePauseState > 1000) {
            this.pauseStateBeforeCurrentTime = this.paused();
            this.lastUpdatePauseState = now;
        }
        this.dummyPlayPosition = time;
        this.onTimeupdate();

        clearTimeout(this.setCurrentTimeTimerId);
        this.setCurrentTimeTimerId = setTimeout(async () => {
            if (this.video === null) {
                return;
            }

            const playbackRate = this.video.playbackRate;

            this.unload();
            this.basePlayPosition = time;
            this.onWaiting();
            this.onPause();
            this.setSrc(
                this.createVideoSrc({
                    videoFileId: this.videoFileId,
                    streamingType: this.streamingType,
                    mode: this.mode,
                    playPosition: this.basePlayPosition,
                }),
            );
            this.load();

            this.video.playbackRate = playbackRate;
            if (this.pauseStateBeforeCurrentTime === true) {
                this.pause();
            } else {
                await this.play().catch(err => {
                    // console.error(err);
                });
            }
            this.commentSender.updateSeek();
            this.dummyPlayPosition = null;
        }, 200);
    }
    public isEnableComment(): boolean {
        return this.commentSender.available();
    }
    public setCommentLag(lag: number): void {
        this.commentSender.setCommentLag(lag);
    }
    public getCommentLag(): number {
        return this.commentSender.getCommentLag();
    }
}
</script>
