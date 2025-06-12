export default interface INicoliveWebSocket {
    send(welcome_msg: string): void;
    connected(): boolean;
    close(code?: number, reason?: string): void;
    on(event: string | symbol, listener: (...args: any[]) => void): INicoliveWebSocket;
}
