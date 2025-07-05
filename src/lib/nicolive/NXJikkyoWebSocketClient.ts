import NicoliveWebSocket from './NicoliveWebSocket';
import INicoliveWebSocket from './INicoliveWebSocket';
import { MessageServer, MsgBase, Disconnect, Error } from './INicoliveWebSocketClient';
import { injectable } from 'inversify';
import INXJikkyoWebSocketClient from './INXJikkyoWebSocketClient';
//終了時とかなんも考えてないからそのうち実装
interface Seat extends MsgBase {
    data: {
        keepIntervalSec: number;
    };
}

//NXJikkyo 互換
interface NXJKRoom extends MsgBase{
    data:{
        messageServer:{
            uri: string
        }
        vposBaseTime: string
    }
};

@injectable()
export default class NXJikkyoWebSocketClient implements INXJikkyoWebSocketClient {
    private socket: INicoliveWebSocket | null = null;
    private _onRecieveMessageServer: ((msg: MessageServer) => any) | null = null;
    private _onDisconnectMessageServer: ((msg: Disconnect) => any) | null = null;
    private _onErrorMessageServer: ((msg: Error) => any) | null = null;
    private interval_id: NodeJS.Timer | null = null;
    constructor() {}

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
                this.processMessage(data as any);
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
            JSON.stringify([
                {ping: {content: 'rs:0'}},
                {ping: {content: 'ps:0'}},
                {
                    thread:{
                        version: `20061206`,
                        thread: 0,
                        threadkey: 0,
                        user_id: '',
                        res_from: -100
                    }
                }
            ]);

        this.socket.send(welcome_msg);
    }

    private processMessage(msg: any) {
        if(msg.thread !== undefined){
            if(msg.thread.resultcode !== 0){
                console.error('Connection Failed')
                return;
            }
        }

        if(msg.ping !== undefined && msg.ping.content === 'rf:0'){
            
        }
        switch (msg['type']) {
            case 'disconnect':
                this.disconnected(msg as Disconnect);
                break;
            case 'error':
                this.error(msg as Error);
                break;
        }
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
