export interface MsgBase {
    type: string;
}
export interface MessageServer extends MsgBase {
    data: {
        viewUri: string;
        vposBaseTime: string;
    };
}

export interface Room extends MsgBase{
    data: {
        messageServer:{
            uri: string
        },
        vposBaseTime: string
    }
}

export interface Disconnect extends MsgBase {
    data: {
        reason: string;
    };
}
export interface Error extends MsgBase {
    body: {
        code: string;
    };
}

//NXJikkyo 互換
export interface NXJKRoom extends MsgBase{
    data:{
        messageServer:{
            uri: string
        }
        threadId: string
        yourPostKey: string
        vposBaseTime: string
    }
};
export default interface INicoliveWebSocketClient {
    connect(url: string): void;
    disconnect(code?: number, reason?: string): void;
    connected(): boolean;
    set onRecieveMessageServer(callback: ((msg: MessageServer) => any) | null);
    set onRecieveRoom(callback: ((msg: NXJKRoom) => any) | null);

    set onDisconnectMessageServer(callback: ((msg: Disconnect) => any) | null);
    set onErrortMessageServer(callback: ((msg: Error) => any) | null);
}
