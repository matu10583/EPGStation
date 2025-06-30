import { injectable, inject } from 'inversify';
import ICommentSender from './ICommentSender';
import * as apid from '../../../../api';
import INicoJKApiModel from '../api/nicojk/INicoJKApiModel';
import BaseVide from '@/components/video/BaseVideo';

@injectable()
export default class CommentSender implements ICommentSender {
    video: BaseVide | null = null;
    comments: apid.NicoJKComments | null = null;
    recvCommentCallbacks: Set<(cmt: apid.NicoJKCommentItem) => any> = new Set();
    nicoJKApiModel: INicoJKApiModel;
    currentIdx: number = 0;

    constructor(@inject('INicoJKApiModel') nicoJKApiModel: INicoJKApiModel) {
        this.nicoJKApiModel = nicoJKApiModel;
    }
    updateSeek(): void {
        this.seeked();
    }
    available(): boolean {
        return this.video != null && this.comments != null;
    }
    async setSrc(recordedId: apid.RecordedId, video: BaseVide) {
        this.resetSrc();
        this.comments = await this.nicoJKApiModel.getComments(recordedId, true);
        if (this.comments == null) {
            return;
        }
        this.video = video;
        this.video.getSrcVideo().addEventListener('timeupdate', this.update);
        // this.video.getSrcVideo().addEventListener('seeked', this.seeked);

        const newIdx = this.searchCurrentIdx();
        if (newIdx == null) {
            this.resetSrc();
            return;
        }
        this.currentIdx = newIdx;
        this.onReciveComment(this.pushComment);
    }
    resetSrc(): void {
        this.offReciveComment(this.pushComment);
        this.comments = null;
        if (this.video != null) {
            this.video.getSrcVideo().removeEventListener('timeupdate', this.update);
            // this.video.getSrcVideo().removeEventListener('seeked', this.seeked);
        }
        this.video = null;
    }

    pushComment = (cmt: apid.NicoJKCommentItem) => {
        if (this.video == null) return;
        this.video.addComment(cmt.content);
    };

    onReciveComment(callback: (cmt: apid.NicoJKCommentItem) => any): void {
        this.recvCommentCallbacks.add(callback);
    }
    offReciveComment(callback: (cmt: apid.NicoJKCommentItem) => any): void {
        this.recvCommentCallbacks.delete(callback);
    }

    update = () => {
        if (this.comments == null || this.video == null) return;
        if (this.currentIdx >= this.comments.comments.length) return;

        let nextComment = this.comments.comments[this.currentIdx];

        while (nextComment.vpos < this.video.getCurrentTimeMS()) {
            this.recvCommentCallbacks.forEach(c => {
                c(nextComment);
            });

            this.currentIdx++;
            if (this.currentIdx >= this.comments.comments.length) break;
            nextComment = this.comments.comments[this.currentIdx];
        }
    };

    seeked = () => {
        if (this.comments == null || this.video == null) return;
        const nextCmt = this.comments.comments[this.currentIdx];
        let newIdx: number | null = null;
        if (nextCmt.vpos > this.video.getCurrentTimeMS()) {
            newIdx = this.searchCurrentIdx(0, this.currentIdx);
        } else if (nextCmt.vpos < this.video.getCurrentTimeMS()) {
            newIdx = this.searchCurrentIdx(this.currentIdx);
        } else {
            newIdx = this.currentIdx;
        }
        if (newIdx != null) this.currentIdx = newIdx;
        this.video.flushComment();
    };

    searchCurrentIdx(start: number = 0, end: number = -1): number | null {
        if (this.comments == null || this.video == null) {
            return null;
        }
        if (end < 0) {
            end = this.comments.comments.length - 1;
        }
        if (start < 0 || start >= this.comments.comments.length || end < 0 || end >= this.comments.comments.length) {
            return null;
        }

        const ctime = this.video.getCurrentTimeMS();
        if (ctime <= this.comments.comments[0].vpos) {
            return 0;
        } else if (ctime >= this.comments.comments[this.comments.comments.length - 1].vpos) {
            return this.comments.comments.length;
        }
        let result = 0;
        while (true) {
            const center = Math.floor((start + end) * 0.5);
            const ccmt = this.comments.comments[center];
            if (ccmt.vpos >= ctime) {
                end = center;
            } else {
                start = center;
            }
            if (end - start == 1) {
                result = end;
                break;
            }
        }
        return result;
    }
}
