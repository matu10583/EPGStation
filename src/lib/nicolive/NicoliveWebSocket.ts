import { injectable } from 'inversify';
import INicoliveWebSocket from './INicoliveWebSocket';

@injectable()
export default class NicoliveWebSocket implements INicoliveWebSocket {
    private ws: WebSocket;
    constructor(url: string) {
        this.ws = new WebSocket(url);
    }
    close(code?: number, reason?: string): void {
        this.ws.close(code, reason);
    }

    send(data: string): void {
        this.ws.send(data);
    }

    set onmessage(handler: ((ev: MessageEvent) => any) | null) {
        this.ws.onmessage = handler;
    }
    set onclose(handler: ((ev: MessageEvent) => any) | null) {
        this.ws.onmessage = handler;
    }
    set onerror(handler: ((ev: MessageEvent) => any) | null) {
        this.ws.onmessage = handler;
    }
    set onopen(handler: ((ev: MessageEvent) => any) | null) {
        this.ws.onmessage = handler;
    }
}
