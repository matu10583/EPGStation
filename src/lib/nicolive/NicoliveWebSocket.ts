import { injectable } from 'inversify';
import INicoliveWebSocket from './INicoliveWebSocket';
import WebSocket from 'ws';

@injectable()
export default class NicoliveWebSocket implements INicoliveWebSocket {
    private ws: WebSocket;
    constructor(url: string) {
        this.ws = new WebSocket(url);
    }
    connected(): boolean {
        return this.ws.readyState <= WebSocket.OPEN;
    }
    on(event: string | symbol, listener: (...args: any[]) => void): INicoliveWebSocket {
        this.ws.on(event, listener);
        return this;
    }

    close(code?: number, reason?: string): void {
        this.ws.close(code, reason);
    }

    send(data: string): void {
        this.ws.send(data);
    }
}
