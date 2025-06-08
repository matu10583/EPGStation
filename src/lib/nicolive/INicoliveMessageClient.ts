

export interface MsgBase {
    type: string;
}
export interface MessageServer extends MsgBase {
    data: {
        viewUri: string;
        vposBaseTime: string;
    };
}
export default interface INicoliveMessageClient{
    connect(url: string):void;
    disconnect(code?: number, reason?: string):void;
    set onRecieveMessageServer(callback: (msg: MessageServer) => any | null);
}