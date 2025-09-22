import UaUtil from '@/util/UaUtil';
import { Component, Vue } from 'vue-property-decorator';
import CommentOverlay from '../overlay/CommentOverlay.vue';
import * as proto from '@/gen/proto';
import CommentRenderer from '@/model/comment/CommentRenderer';
import container from '@/model/ModelContainer';
import ICommentRenderer from '@/model/comment/ICommentRenderer';
import IServerConfigModel from '@/model/serverConfig/IServerConfigModel';
import IRecordedApiModel from '@/model/api/recorded/IRecordedApiModel';
type NicoJKChunkedMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
type NicoJKConnectedSegment = proto.epgstation.nicojk.service.ConnectedSegment;

interface CommentRenderState {
    enable: boolean;
    renderer: ICommentRenderer;
    vposBaseTime: number;
}

export default abstract class BaseVide extends Vue {
    protected video!: HTMLVideoElement;
    protected lastSubtitleState: TextTrackMode = 'disabled';
    protected lastCommentState: boolean = false;

    protected recieveLiveCommentCallback!: (msg: NicoJKChunkedMessage) => void;
    protected connectNicoLiveCallback!: (msg: NicoJKConnectedSegment) => void;
    private commentRendererState: CommentRenderState = {
        enable: false,
        renderer: container.get<ICommentRenderer>('ICommentRenderer'),
        vposBaseTime: 0,
    };
    private framePerSeconds: number = 30;
    private lastTime: number = 0;
    private updateFrameId: number = 0;
    private updatePlayPositionId: number = 0;
    private updatePlayPositionInterval: number = 10; //秒
    private recordedAPIModel = container.get<IRecordedApiModel>('IRecordedApiModel');

    private config: IServerConfigModel = container.get<IServerConfigModel>('IServerConfigModel');
    public getSrcVideo() {
        return this.video;
    }

    protected commentCanvas!: HTMLCanvasElement;
    protected commentContext!: CanvasRenderingContext2D | null;

    private resizeCanvas = () => {
        if (!this.video) return;
        this.commentCanvas.width = this.video.videoWidth;
        this.commentCanvas.height = this.video.videoHeight;
        this.commentRendererState.renderer.setRect(this.commentCanvas.width, this.commentCanvas.height);
    };
    public mounted(): void {
        this.video = this.$refs.video as HTMLVideoElement;
        this.commentCanvas = this.$refs.commentCanvas as HTMLCanvasElement;
        this.commentContext = this.commentCanvas.getContext('2d') ?? null;

        this.recieveLiveCommentCallback = this._recieveLiveCommentCallback.bind(this);
        this.connectNicoLiveCallback = this._connectNicoliveCallback.bind(this);

        this.video.addEventListener('loadeddata', this.resizeCanvas);
        window.addEventListener('resize', this.resizeCanvas);

        // コメント描画ループ開始
        this.updateFrameId = requestAnimationFrame(ts => this.renderComment(ts));

        // 時刻更新
        this.video.addEventListener('timeupdate', this.onTimeupdate.bind(this));

        // 読み込み中
        this.video.addEventListener('waiting', this.onWaiting.bind(this));

        // 読み込み完了
        this.video.addEventListener('loadeddata', this.onLoadeddata.bind(this));

        // 再生可能
        this.video.addEventListener('canplay', this.onCanplay.bind(this));

        // 終了
        this.video.addEventListener('ended', this.onEnded.bind(this));

        // 再生
        this.video.addEventListener('play', this.onPlay.bind(this));

        // 停止
        this.video.addEventListener('pause', this.onPause.bind(this));

        // 再生速度変化
        this.video.addEventListener('ratechange', this.onRatechange.bind(this));

        // 音量変化
        this.video.addEventListener('volumechange', this.onVolumechange.bind(this));

        this.initVideoSetting();
    }

    // コメントのみcanvasに描画
    private renderComment(timestamp: number) {
        if (this.video === null || this.commentContext === null) return;

        // canvasサイズをvideoに合わせる
        if (this.commentCanvas.width !== this.video.videoWidth || this.commentCanvas.height !== this.video.videoHeight) {
            this.commentCanvas.width = this.video.videoWidth;
            this.commentCanvas.height = this.video.videoHeight;
            this.commentRendererState.renderer.setRect(this.commentCanvas.width, this.commentCanvas.height);
        }

        // コメントのみ描画
        this.commentContext.clearRect(0, 0, this.commentCanvas.width, this.commentCanvas.height);
        if (this.commentRendererState.enable) {
            this.commentRendererState.renderer.render((this.video.currentTime - this.lastTime) * 1000, this.commentContext);
        }
        this.lastTime = this.video.currentTime;

        this.updateFrameId = requestAnimationFrame(ts => this.renderComment(ts));
    }

    /**
     * video 再生初期設定
     */
    protected abstract initVideoSetting(): void;

    /**
     * video ソース設定
     */
    protected setSrc(src: string): void {
        if (this.video == null) {
            return;
        }
        this.video.src = src;
    }

    protected async getPlaybackPosition(recordedId: number): Promise<number> {
        const data = await this.recordedAPIModel.get(recordedId, true);
        return data.lastPlayTime ?? 0;
    }

    protected setIntervalPlayPosition(): void {
        this.updatePlayPositionId = window.setInterval(() => {
            if (this.video && !this.video.paused) {
                this.savePlaybackPosition(this.getCurrentTime());
            }
        }, this.updatePlayPositionInterval * 1000);
    }

    protected async savePlaybackPosition(position: number): Promise<void> {
        console.log(`save play position: ${position}`);

        await this.recordedAPIModel.updateLastPlayPosition((this.$props as any).recordedId, Math.floor(position));
    }

    protected removeIntervalPlayPosition(): void {
        if (this.updatePlayPositionId) {
            clearInterval(this.updatePlayPositionId);
            this.updatePlayPositionId = 0;
        }
    }

    /**
     * video の 読み込み
     */
    protected load(): void {
        if (this.video === null) {
            return;
        }
        this.video.load();
    }

    /**
     * 読み込んだ video の破棄
     */
    protected unload(): void {
        if (this.video === null) {
            return;
        }
        this.video.pause();
        this.video.removeAttribute('src');
        this.video.load();
    }

    /**
     * 時刻更新
     */
    protected onTimeupdate(): void {
        this.$emit('timeupdate');
    }

    /**
     * 読み込み中
     */
    protected onWaiting(): void {
        console.log('waiting');

        this.$emit('waiting');
    }

    /**
     * 読み込み完了
     */
    protected onLoadeddata(): void {
        console.log('loaded');

        this.$emit('loadeddata');
    }

    /**
     * 再生可能
     */
    protected onCanplay(): void {
        console.log('play can');

        this.$emit('canplay');
    }

    /**
     * 終了
     */
    protected onEnded(): void {
        this.$emit('ended');
    }

    /**
     * 再生
     */
    protected onPlay(): void {
        this.video?.play();
        this.$emit('play');
    }

    /**
     * 停止
     */
    protected onPause(): void {
        this.video?.pause();
        this.$emit('pause');
    }

    /**
     * 再生速度変化
     */
    protected onRatechange(): void {
        this.$emit('ratechange');
    }

    /**
     * 音量変化
     */
    protected onVolumechange(): void {
        this.$emit('volumechange');
    }

    public beforeDestroy(): void {
        cancelAnimationFrame(this.updateFrameId);
        window.removeEventListener('resize', this.resizeCanvas);
        this.commentRendererState.renderer.flushComment();
        this.unload();
    }

    /**
     * 動画再生
     */
    public async play(): Promise<void> {
        if (this.video === null) {
            return;
        }
        await this.video.play();
    }

    /**
     * 動画停止
     */
    public pause(): void {
        if (this.video === null) {
            return;
        }
        this.video.pause();
    }

    /**
     * 停止中か
     */
    public paused(): boolean {
        return this.video === null ? true : this.video.paused;
    }

    /**
     * 再生速度を返す
     */
    public getPlaybackRate(): number {
        return this.video === null ? 1.0 : this.video.playbackRate;
    }

    /**
     * 再生速度を設定する
     */
    public setPlaybackRate(rate: number): void {
        if (this.video === null) {
            return;
        }
        this.video.playbackRate = rate;
    }

    /**
     * 動画の長さを返す (秒)
     * @return number
     */
    public getDuration(): number {
        return this.video === null || this.video.duration === Infinity || isNaN(this.video.duration) ? 0 : this.video.duration;
    }

    /**
     * 動画の現在再生位置を返す (秒)
     * @return number
     */
    public getCurrentTime(): number {
        return this.video === null || this.video.currentTime === Infinity || isNaN(this.video.currentTime) ? 0 : this.video.currentTime;
    }

    public getCurrentTimeMS(): number {
        return this.getCurrentTime() * 1000;
    }

    /**
     * 再生位置設定
     * @param time: number (秒)
     */
    public setCurrentTime(time: number): void {
        if (this.video === null) {
            return;
        }

        this.video.currentTime = time;

        this.fixSubtitleState();
    }

    /**
     * 音量を返す
     * @return number
     */
    public getVolume(): number {
        return this.video === null || this.video.muted ? 0 : this.video.volume;
    }

    /**
     * mute 切り替え
     */
    public switchMute(): void {
        if (this.video === null) {
            return;
        }

        this.video.muted = !this.video.muted;
    }

    /**
     * 音量設定
     * @param volume: number 0.0 ~ 1.0
     */
    public setVolume(volume: number): void {
        if (this.video === null) {
            return;
        }

        this.video.volume = volume;
    }

    /**
     * video 要素にフルスクリーンリクエスト
     */
    public requestFullscreen(): boolean {
        if (this.video === null) {
            return false;
        }

        /* tslint:disable:newline-before-return */
        if (UaUtil.isAndroid()) {
            this.video.requestFullscreen({ navigationUI: 'hide' });
            return true;
        } else if (typeof this.video.requestFullscreen === 'function') {
            this.video.requestFullscreen();
            return true;
        } else if ((this.video as any).mozRequestFullScreen) {
            (this.video as any).mozRequestFullScreen();
            return true;
        } else if ((this.video as any).webkitRequestFullScreen) {
            (this.video as any).webkitRequestFullScreen();
            return true;
        } else if ((this.video as any).webkitEnterFullscreen) {
            (this.video as any).webkitEnterFullscreen();
            return true;
        } else if ((this.video as any).msRequestFullscreen) {
            (this.video as any).msRequestFullscreen();
            return true;
        }
        /* tslint:enable:newline-before-return */

        return false;
    }

    /**
     * pip 切り替え
     */
    public requestPictureInPicture(): void {
        if (this.video === null || typeof (this.video as any).requestPictureInPicture !== 'function') {
            return;
        }

        try {
            if (!(document as any).pictureInPictureElement) {
                (this.$refs.video as any).requestPictureInPicture();
            } else {
                (this.video as any).requestPictureInPicture();
            }
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * コメントが有効か
     * @return boolean true で有効
     */
    public isEnableComment(): boolean {
        return false;
        // return this.commentOverlay !== null;
    }

    /**
     * コメントが表示されているか
     * @return boolean true で表示されている
     */
    public isShowingComment(): boolean {
        return this.commentRendererState.enable;
    }

    /**
     * コメントを表示させる
     */
    public showComment(): void {
        this.commentRendererState.enable = true;
        this.lastCommentState = this.commentRendererState.enable;
    }

    //コメントを追加する
    public addComment(text: string): void {
        console.log(text);

        this.commentRendererState.renderer.addComment(text);
    }
    public flushComment(): void {
        console.log('flush');

        this.commentRendererState.renderer.flushComment();
    }

    private _recieveLiveCommentCallback(msg: NicoJKChunkedMessage) {
        const errorThreshold = this.config.getConfig()?.nicoLive?.commentLagThreshold ?? 30; //30秒前以上の奴は無視;
        const now = Date.now() / 1000 - this.commentRendererState.vposBaseTime;

        if (msg.message?.chat?.content == null || msg.message?.chat?.vpos == null) return;
        const at_sec = msg.message.chat.vpos / 100;

        if (now - at_sec < errorThreshold) {
            this.commentRendererState.renderer.addComment(msg.message.chat.content);
        }
    }

    private _connectNicoliveCallback(msg: NicoJKConnectedSegment) {
        console.log('connected');

        if (msg.props?.program?.vposBaseTime == null) return;
        console.log(msg);

        this.commentRendererState.vposBaseTime = msg.props.program.vposBaseTime;
    }

    /**
     * コメントを非表示にする
     */
    public disabledComment(): void {
        this.commentRendererState.enable = false;
        this.lastCommentState = this.commentRendererState.enable;
    }

    /**
     * ユーザが最後に指定した字幕の表示状態と実際の状態がずれている場合に修正する
     */
    public fixCommentState(): void {
        if (this.commentRendererState.enable !== this.lastCommentState) {
            if (this.lastCommentState) {
                this.showComment();
            } else {
                this.disabledComment();
            }
        }
    }

    /**
     * 字幕が有効か
     * @return boolean true で有効
     */
    public isEnabledSubtitles(): boolean {
        return this.video !== null && this.video.textTracks.length > 0;
    }

    /**
     * 字幕が表示されているか
     * @return boolean true で表示されている
     */
    public isShowingSubtitle(): boolean {
        return this.video !== null && this.video.textTracks.length > 0 && this.video.textTracks[0].mode === 'showing';
    }

    /**
     * 字幕を表示させる
     */
    public showSubtitle(): void {
        if (this.video === null || this.video.textTracks.length === 0) {
            return;
        }
        console.log('show subtitle');

        this.video.textTracks[0].mode = 'showing';
        this.lastSubtitleState = this.video.textTracks[0].mode;
    }

    /**
     * 字幕を非表示にする
     */
    public disabledSubtitle(): void {
        if (this.video === null || this.video.textTracks.length === 0) {
            return;
        }

        this.video.textTracks[0].mode = 'disabled';
        this.lastSubtitleState = this.video.textTracks[0].mode;
    }

    /**
     * ユーザが最後に指定した字幕の表示状態と実際の状態がずれている場合に修正する
     */
    public fixSubtitleState(): void {
        if (this.video === null || this.video.textTracks.length === 0) {
            return;
        }

        if (this.video.textTracks[0].mode !== this.lastSubtitleState) {
            if (this.lastSubtitleState === 'showing') {
                this.showSubtitle();
            } else {
                this.disabledSubtitle();
            }
        }
    }

    public setCommentLag(lag: number): void {}
    public getCommentLag(): number {
        return 0;
    }
}
