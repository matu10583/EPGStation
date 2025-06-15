import UaUtil from '@/util/UaUtil';
import { Component, Vue } from 'vue-property-decorator';
import CommentOverlay from '../overlay/CommentOverlay.vue';
import * as proto from '@/gen/proto';
import CommentRenderer from '@/model/comment/CommentRenderer';
import container from '@/model/ModelContainer';
import ICommentRenderer from '@/model/comment/ICommentRenderer';
type NicoJKChunkedMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
type NicoJKConnectedSegment = proto.epgstation.nicojk.service.ConnectedSegment;

interface CommentRenderState {
    enable: boolean;
    renderer: ICommentRenderer;
    vposBaseTime: number;
}

export default abstract class BaseVide extends Vue {
    protected video: HTMLVideoElement | null = null;
    private srcVideo!: HTMLVideoElement;
    protected lastSubtitleState: TextTrackMode = 'disabled';
    protected lastCommentState: boolean = false;

    protected recieveLiveCommentCallback!: (msg: NicoJKChunkedMessage) => void;
    protected connectNicoLiveCallback!: (msg: NicoJKConnectedSegment) => void;
    private renderCanvas!: HTMLCanvasElement;
    private renderContext!: CanvasRenderingContext2D | null;
    private commentRendererState: CommentRenderState = {
        enable: false,
        renderer: container.get<ICommentRenderer>('ICommentRenderer'),
        vposBaseTime: 0,
    };
    private framePerSeconds: number = 30;
    private lastTime: number = 0;
    private updateFrameId: number = 0;

    protected getSrcVideo() {
        return this.srcVideo;
    }

    public mounted(): void {
        this.video = this.$refs.video as HTMLVideoElement;
        this.renderCanvas = document.createElement('canvas');
        this.renderContext = this.renderCanvas.getContext('2d') ?? null;
        this.srcVideo = document.createElement('video');
        this.srcVideo.autoplay = true;

        this.recieveLiveCommentCallback = this._recieveLiveCommentCallback.bind(this);
        this.connectNicoLiveCallback = this._connectNicoliveCallback.bind(this);

        // 時刻更新
        this.srcVideo.addEventListener('timeupdate', this.onTimeupdate.bind(this));

        // 読み込み中
        this.srcVideo.addEventListener('waiting', this.onWaiting.bind(this));

        // 読み込み完了
        this.srcVideo.addEventListener('loadeddata', this.onLoadeddata.bind(this));

        // 再生可能
        this.srcVideo.addEventListener('canplay', this.onCanplay.bind(this));

        //ソースが再生可能になったら更新開始。更新すればvideo側にもストリームがたまるはず
        this.srcVideo.addEventListener(
            'canplay',
            () => {
                this.updateCanvas(0);
                this.initCaptureCanvas();
                this.updateFrameId = requestAnimationFrame(this.render.bind(this));
            },
            { once: true },
        );

        // 終了
        this.srcVideo.addEventListener('ended', this.onEnded.bind(this));

        // 再生
        this.srcVideo.addEventListener('play', this.onPlay.bind(this));

        // 停止
        this.srcVideo.addEventListener('pause', this.onPause.bind(this));

        // 再生速度変化
        this.srcVideo.addEventListener('ratechange', this.onRatechange.bind(this));

        // 音量変化
        this.srcVideo.addEventListener('volumechange', this.onVolumechange.bind(this));

        this.initVideoSetting();
    }

    private initCaptureCanvas() {
        if (this.video === null) return;
        const canvasStream = this.renderCanvas.captureStream(this.framePerSeconds);
        // const videoStream = (this.srcVideo as any).captureStream();

        // for (const track of videoStream.getAudioTracks()) {
        //     canvasStream.addTrack(track);
        // }

        this.video.srcObject = canvasStream;
    }

    private render(timestamp: number) {
        if (this.video === null) return;
        this.updateCanvas(timestamp);
        this.updateFrameId = requestAnimationFrame(ts => {
            this.render(ts);
        });
    }

    private updateCanvas(ts: number) {
        if (this.lastTime === 0) this.lastTime = ts;
        if (this.renderContext === null) return;

        const delta = ts - this.lastTime;

        this.renderCanvas.width = this.srcVideo.videoWidth;
        this.renderCanvas.height = this.srcVideo.videoHeight;
        this.commentRendererState.renderer.setRect(this.renderCanvas.width, this.renderCanvas.height);

        // if(this.srcVideo.readyState<HTMLMediaElement.HAVE_FUTURE_DATA){
        //     //コメントだけだしとく
        //     if(this.commentRendererState.enable){
        //         this.commentRendererState.renderer.render(
        //             0, this.renderContext
        //         );
        //     }
        //     return;
        // }

        this.renderContext.clearRect(0, 0, this.renderCanvas.width, this.renderCanvas.height);

        //動画の描画
        this.renderContext.drawImage(this.srcVideo, 0, 0, this.renderCanvas.width, this.renderCanvas.height);

        //コメントの描画
        if (this.commentRendererState.enable) {
            this.commentRendererState.renderer.render(delta, this.renderContext);
        }
        this.lastTime = ts;
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

        this.srcVideo.src = src;
    }

    /**
     * video の 読み込み
     */
    protected load(): void {
        if (this.video === null) {
            return;
        }

        this.srcVideo.load();
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
        this.video.removeAttribute('srcObject');
        this.video.load();
        this.srcVideo.pause();
        this.srcVideo.removeAttribute('src');
        this.srcVideo.load();
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
        this.unload();
    }

    /**
     * 動画再生
     */
    public async play(): Promise<void> {
        if (this.video === null) {
            return;
        }
        await this.srcVideo.play();
    }

    /**
     * 動画停止
     */
    public pause(): void {
        if (this.video === null) {
            return;
        }
        this.srcVideo.pause();
    }

    /**
     * 停止中か
     */
    public paused(): boolean {
        return this.video === null ? true : this.srcVideo.paused;
    }

    /**
     * 再生速度を返す
     */
    public getPlaybackRate(): number {
        return this.video === null ? 1.0 : this.srcVideo.playbackRate;
    }

    /**
     * 再生速度を設定する
     */
    public setPlaybackRate(rate: number): void {
        if (this.video === null) {
            return;
        }

        this.srcVideo.playbackRate = rate;
    }

    /**
     * 動画の長さを返す (秒)
     * @return number
     */
    public getDuration(): number {
        return this.video === null || this.srcVideo.duration === Infinity || isNaN(this.srcVideo.duration) ? 0 : this.srcVideo.duration;
    }

    /**
     * 動画の現在再生位置を返す (秒)
     * @return number
     */
    public getCurrentTime(): number {
        return this.video === null || this.srcVideo.currentTime === Infinity || isNaN(this.video.currentTime) ? 0 : this.srcVideo.currentTime;
    }

    /**
     * 再生位置設定
     * @param time: number (秒)
     */
    public setCurrentTime(time: number): void {
        if (this.video === null) {
            return;
        }

        this.srcVideo.currentTime = time;

        this.fixSubtitleState();
    }

    /**
     * 音量を返す
     * @return number
     */
    public getVolume(): number {
        return this.video === null || this.srcVideo.muted ? 0 : this.srcVideo.volume;
    }

    /**
     * mute 切り替え
     */
    public switchMute(): void {
        if (this.video === null) {
            return;
        }

        this.srcVideo.muted = !this.srcVideo.muted;
    }

    /**
     * 音量設定
     * @param volume: number 0.0 ~ 1.0
     */
    public setVolume(volume: number): void {
        if (this.video === null) {
            return;
        }

        this.srcVideo.volume = volume;
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
    // public addComment(text: string): void {
    //     if (this.commentOverlay == null) return;
    //     this.commentOverlay.addComment(text);
    // }

    private _recieveLiveCommentCallback(msg: NicoJKChunkedMessage) {
        const errorThreshold = 5; //5秒前以上の奴は無視;
        const now = Date.now() / 1000;

        if (msg.message?.chat?.content == null || msg.message?.chat?.vpos == null) return;
        const at_sec = msg.message.chat.vpos;

        if (now - at_sec < errorThreshold) {
            this.commentRendererState.renderer.addComment(msg.message.chat.content);
        }
    }

    private _connectNicoliveCallback(msg: NicoJKConnectedSegment) {
        console.log("connected");
        
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
}
