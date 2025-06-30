import { ChunkedMessage } from '../proto';
import { ConnectedSegment } from '../gen/epgstation/nicojk/service/ConnectedSegment_pb';

export default interface INicoliveCommentFetcher {
    connect(): Promise<boolean>;
    disconnect(): void;
    onRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any): void;
    offRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any): void;
    connected(): boolean;
    getConnectedSegment(): ConnectedSegment | null;
}
