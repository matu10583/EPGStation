import { ChunkedMessage } from '../proto';

export default interface INicoliveCommentFetcher {
    connect(): Promise<boolean>;
    disconnect(): void;
    onRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any): void;
    offRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any): void;
    connected(): boolean;
}
