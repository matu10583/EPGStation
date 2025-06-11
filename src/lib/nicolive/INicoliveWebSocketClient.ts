export interface MsgBase {
    type: string;
}
export interface MessageServer extends MsgBase {
    data: {
        viewUri: string;
        vposBaseTime: string;
    };
}
export default interface INicoliveWebSocketClient {
    connect(url: string): void;
    disconnect(code?: number, reason?: string): void;
    connected(): boolean;
    set onRecieveMessageServer(callback: ((msg: MessageServer) => any) | null);
}
