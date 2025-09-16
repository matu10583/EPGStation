import BaseVide from '@/components/video/BaseVideo';
import * as apid from '../../../../api';

export default interface ICommentSender {
    setSrc(recordedId: apid.RecordedId, video: BaseVide): Promise<void>;
    resetSrc(): void;
    available(): boolean;
    updateSeek(): void;
    setCommentLag(lag: number): void;
    getCommentLag(): number;

    // onReciveComment(callback: (cmt: apid.NicoJKCommentItem) => any): void;
    // offReciveComment(callback: (cmt: apid.NicoJKCommentItem) => any): void;
}
