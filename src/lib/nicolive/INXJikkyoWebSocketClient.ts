
export default interface INXJikkyoWebSocketClient {
    connect(url: string): void;
    disconnect(code?: number, reason?: string): void;
    connected(): boolean;
    set onRecieveMessageServer(callback: ((msg: MessageServer) => any) | null);

    set onDisconnectMessageServer(callback: ((msg: Disconnect) => any) | null);
    set onErrortMessageServer(callback: ((msg: Error) => any) | null);
}
