<template>
    <div style="position: relative; width: 100%; height: 100%">
        <video ref="video" autoplay playsinline style="width: 100%; height: 100%; display: block"></video>
        <canvas ref="commentCanvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none"></canvas>
    </div>
</template>

<script lang="ts">
import BaseVideo from '@/components/video/BaseVideo';
import ICommentSender from '@/model/comment/ICommentSender';
import container from '@/model/ModelContainer';
import UaUtil from '@/util/UaUtil';
import { Component, Prop, Watch } from 'vue-property-decorator';
import * as apid from '../../../../api';

@Component({})
export default class NormalVideo extends BaseVideo {
    private commentSender: ICommentSender = container.get('ICommentSender');
    @Prop({ required: true })
    public videoSrc!: string;
    @Prop({ required: true })
    recordedId!: apid.RecordedId | null;

    public mounted(): void {
        super.mounted();
    }

    public async beforeDestroy(): Promise<void> {
        this.commentSender.resetSrc();
        super.beforeDestroy();
    }

    public isEnableComment(): boolean {
        return this.commentSender.available();
    }

    public setCurrentTime(time: number): void {
        this.commentSender.updateSeek();
        super.setCurrentTime(time);
    }

    /**
     * video 再生初期設定
     */
    protected initVideoSetting(): void {
        this.setSrc(this.videoSrc);
        this.load();
        if (this.recordedId == null) return;
        this.commentSender.setSrc(this.recordedId, this);
    }
    public setCommentLag(lag: number): void {
        this.commentSender.setCommentLag(lag);
    }
    public getCommentLag(): number {
        return this.commentSender.getCommentLag();
    }
}
</script>
