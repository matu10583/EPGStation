import NicoliveWebSocket from './NicoliveWebSocket';
import INicoliveWebSocket from './INicoliveWebSocket';
import INicoliveWebSocketClient, { MessageServer, MsgBase, Disconnect, Error, NXJKRoom } from './INicoliveWebSocketClient';
import { injectable } from 'inversify';
//終了時とかなんも考えてないからそのうち実装
interface Seat extends MsgBase {
    data: {
        keepIntervalSec: number;
    };
}



@injectable()
export default class NicoliveWebSocketClient implements INicoliveWebSocketClient {
    private socket: INicoliveWebSocket | null = null;
    private _onRecieveMessageServer: ((msg: MessageServer) => any) | null = null;
    private _onRecieveRoom: ((room: NXJKRoom) => any) | null = null;
    private _onDisconnectMessageServer: ((msg: Disconnect) => any) | null = null;
    private _onErrorMessageServer: ((msg: Error) => any) | null = null;
    private interval_id: NodeJS.Timer | null = null;
    constructor() {}
    set onRecieveRoom(callback: ((msg: NXJKRoom) => any) | null) {
        this._onRecieveRoom = callback;
    }

    connected(): boolean {
        const connected = this.socket?.connected();
        return connected === undefined ? false : connected;
    }

    public async connect(url: string) {
        this.socket = new NicoliveWebSocket(url);

        this.socket.on('open', () => {
            console.log(`Connect Succeess: `, url);
            this.sendWelcome();
        });
        this.socket.on('message', event => {
            try {
                const text = event.toString('utf8');
                const data = JSON.parse(text);
                this.processMessage(data as MsgBase);
            } catch (e) {
                console.error('Invalid Json');
            }
        });
        this.socket.on('close', () => {
            //手動でも向こうからでもここを通る
            console.log('Connect Closed ', url);
        });
        this.socket.on('error', error => {
            console.error('Connect Failed', error);
        });
    }

    public disconnect(code?: number, reason?: string) {
        if (this.socket === null) return;
        this.socket.close(code, reason);
        this.socket = null;
        if (this.interval_id !== null) {
            clearInterval(this.interval_id);
            this.interval_id = null;
        }
    }

    private sendWelcome() {
        if (this.socket === null) return;
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
            case 'room':
                this.processNXRoom(msg as NXJKRoom);
        }
    }

    private keepSeat(msg: Seat) {
        if (this.socket === null) return;
        console.log('seat');
        this.interval_id = setInterval(() => {
            if (this.socket === null) return;
            const send_msg = '{"type":"keepSeat"}';
            this.socket.send(send_msg);
        }, msg.data.keepIntervalSec);
    }
    private pong() {
        if (this.socket === null) return;
        console.log('pong');
        const send_msg = '{"type":"keepSeat"}';
        this.socket.send(send_msg);
    }

    private disconnected(msg: Disconnect) {
        if (this.socket === null) return;
        console.log('disconnect: ', msg.data.reason);
        if (this._onDisconnectMessageServer != null) {
            this._onDisconnectMessageServer(msg);
        }
    }
    private error(msg: Error) {
        if (this.socket === null) return;
        console.log('error: ', msg.body.code);
        if (this._onErrorMessageServer != null) {
            this._onErrorMessageServer(msg);
        }
    }
    private processMessageServer(msg: MessageServer) {
        console.log('message server');
        if (this._onRecieveMessageServer) {
            this._onRecieveMessageServer(msg);
        }
    }
    private processNXRoom(msg: NXJKRoom){
        if(this._onRecieveRoom != null){
            this._onRecieveRoom(msg);
        }
    }
    public set onRecieveMessageServer(callback: ((msg: MessageServer) => any) | null) {
        this._onRecieveMessageServer = callback;
    }
    set onDisconnectMessageServer(callback: ((msg: Disconnect) => any) | null) {
        this._onDisconnectMessageServer = callback;
    }
    set onErrortMessageServer(callback: ((msg: Error) => any) | null) {
        this._onErrorMessageServer = callback;
    }
}
