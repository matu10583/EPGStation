export default interface INicoliveWebSocket {
    send(welcome_msg: string): void;
    close(code?: number, reason?: string): void;
    set onmessage(handler: ((ev: MessageEvent) => any) | null);
    set onopen(handler: ((ev: MessageEvent) => any) | null);
    set onclose(handler: ((ev: MessageEvent) => any) | null);
    set onerror(handler: ((ev: MessageEvent) => any) | null);
}
