import NicoliveWebSocket from './NicoliveWebSocket';
import INicoliveWebSocket from './INicoliveWebSocket';
import INicoliveMessageClient, {MessageServer, MsgBase} from './INicoliveMessageClient';
import {  injectable } from 'inversify';


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
    private socket: INicoliveWebSocket|null = null;
    private _onRecieveMessageServer: ((msg: MessageServer) => any) | null = null;
    private interval_id: NodeJS.Timer| null=null;;
    constructor() {
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
        this.socket.onclose = () => {
            console.log('Connect Closed ', url);
        };
        this.socket.onerror = error => {
            console.error('Connect Failed', error);
        };
    }

    public disconnect(code?: number, reason?: string) {
        if(this.socket===null) return;
        this.socket.close(code, reason);
        this.socket = null;
        if(this.interval_id!==null){
            clearInterval(this.interval_id);
            this.interval_id = null;
        }
    }

    private sendWelcome() {
        if(this.socket===null) return;
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
        if(this.socket===null) return;
        console.log('seat');
        this.interval_id = setInterval(() => {
            if(this.socket===null) return;
            const send_msg = '{"type":"keepSeat"}';
            this.socket.send(send_msg);
        }, msg.data.keepIntervalSec);
    }
    private pong() {
        if(this.socket===null) return;
        console.log('pong');
        const send_msg = '{"type":"keepSeat"}';
        this.socket.send(send_msg);
    }

    private disconnected(msg: Disconnect) {
        if(this.socket===null) return;
        console.log('disconnect: ', msg.data.reason);
    }
    private error(msg: Error) {
        if(this.socket===null) return;
        console.log('error: ', msg.body.code);
    }
    private processMessageServer(msg: MessageServer) {
        console.log('message server');
        if (this._onRecieveMessageServer) {
            this._onRecieveMessageServer(msg);
        }
    }
    public set onRecieveMessageServer(callback: ((msg: MessageServer) => any) | null) {
        this._onRecieveMessageServer = callback;
    }
}
