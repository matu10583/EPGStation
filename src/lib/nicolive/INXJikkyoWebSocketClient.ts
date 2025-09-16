import { ChunkedMessage } from '../proto';

export default interface INXJikkyoWebSocketClient {
    connect(url: string, thread: string, threadkey: string): void;
    disconnect(code?: number, reason?: string): void;
    connected(): boolean;
    onRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any): void;
    offRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any): void;

    // set onDisconnectMessageServer(callback: ((msg: Disconnect) => any) | null);
    // set onErrortMessageServer(callback: ((msg: Error) => any) | null);
}
