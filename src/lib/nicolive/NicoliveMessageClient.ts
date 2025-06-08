import NicoliveWebSocket from './NicoliveWebSocket';
import INicoliveWebSocket from './INicoliveWebSocket';
import INicoliveMessageClient, {MessageServer, MsgBase} from './INicoliveMessageClient';
import { inject, injectable } from 'inversify';


interface Seat extends MsgBase {
    data: {
        keepIntervalSec: number;
    };
}
interface Disconnect extends MsgBase {
    data: {
        reason: string;
    };
}
interface Error extends MsgBase {
    body: {
        code: string;
    };
}


@injectable()
export default class NicoliveMessageClient implements INicoliveMessageClient {
    private socket!: INicoliveWebSocket;
    private _onRecieveMessageServer: ((msg: MessageServer) => any) | null = null;
    constructor(
        @inject('INicoliveWebSocket') _soc: INicoliveWebSocket,
    ) {
        this.socket = _soc;
    }

    public async connect(url: string) {
        this.socket = new NicoliveWebSocket(url);

        this.socket.onopen = () => {
            console.log(`Connect Succeess: `, url);
            this.sendWelcome();
        };
        this.socket.onmessage = event => {
            try {
                const data = JSON.parse(event.data);
                this.processMessage(data as MsgBase);
            } catch (e) {
                console.error('Invalid Json');
            }
        };
        this.socket.onclose = event => {
            console.log('Connect Closed ', url);
        };
        this.socket.onerror = error => {
            console.error('Connect Failed', error);
        };
    }

    public disconnect(code?: number, reason?: string) {
        this.socket.close(code, reason);
    }

    private sendWelcome() {
        const welcome_msg =
            '{"type":"startWatching","data":{"stream":{"quality":"abr","protocol":"hls","latency":"high","chasePlay":false},"room":{"protocol":"webSocket","commentable":true},"reconnect":false}}';

        this.socket.send(welcome_msg);
    }

    private processMessage(msg: MsgBase) {
        console.log(msg);
        switch (msg['type']) {
            case 'seat':
                this.keepSeat(msg as Seat);
                break;
            case 'ping':
                this.pong();
                break;
            case 'disconnect':
                this.disconnected(msg as Disconnect);
                break;
            case 'error':
                this.error(msg as Error);
                break;
            case 'messageServer':
                this.processMessageServer(msg as MessageServer);
                break;
        }
    }

    private keepSeat(msg: Seat) {
        console.log('seat');
        setInterval(() => {
            const send_msg = '{"type":"keepSeat"}';
            this.socket.send(send_msg);
        }, msg.data.keepIntervalSec);
    }
    private pong() {
        console.log('pong');
        const send_msg = '{"type":"keepSeat"}';
        this.socket.send(send_msg);
    }

    private disconnected(msg: Disconnect) {
        console.log('disconnect: ', msg.data.reason);
    }
    private error(msg: Error) {
        console.log('error: ', msg.body.code);
    }
    private processMessageServer(msg: MessageServer) {
        console.log('message server');
        if (this._onRecieveMessageServer) {
            this._onRecieveMessageServer(msg);
        }
    }
    public set onRecieveMessageServer(callback: (msg: MessageServer) => any | null) {
        this._onRecieveMessageServer = callback;
    }
}
