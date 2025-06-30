import BaseVide from '@/components/video/BaseVideo';
import * as apid from '../../../../api';

export default interface ICommentSender {
    setSrc(recordedId: apid.RecordedId, video: BaseVide): Promise<void>;
    resetSrc(): void;
    available(): boolean;
    updateSeek(): void;
    // onReciveComment(callback: (cmt: apid.NicoJKCommentItem) => any): void;
    // offReciveComment(callback: (cmt: apid.NicoJKCommentItem) => any): void;
}
