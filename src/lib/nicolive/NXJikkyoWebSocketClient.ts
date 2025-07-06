import NicoliveWebSocket from './NicoliveWebSocket';
import INicoliveWebSocket from './INicoliveWebSocket';
// import { MessageServer, MsgBase, Disconnect, Error } from './INicoliveWebSocketClient';
import { injectable } from 'inversify';
import INXJikkyoWebSocketClient from './INXJikkyoWebSocketClient';
import { fromJson } from '@bufbuild/protobuf';
import { ChunkedMessage, ChunkedMessageSchema } from '../proto';
//終了時とかなんも考えてないからそのうち実装

@injectable()
export default class NXJikkyoWebSocketClient implements INXJikkyoWebSocketClient {
    private socket: INicoliveWebSocket | null = null;
    private _onRecieveChunkedMessages: Set<((msg: ChunkedMessage) => any)> = new Set();
    // private _onDisconnectMessageServer: (() => any) | null = null;
    // private _onErrorMessageServer: (() => any) | null = null;
    constructor() {}

    connected(): boolean {
        const connected = this.socket?.connected();
        return connected === undefined ? false : connected;
    }

    public async connect(url: string, thread: string, threadkey: string) {
        this.socket = new NicoliveWebSocket(url);

        this.socket.on('open', () => {
            console.log(`Connect Succeess: `, url);
            this.sendWelcome(thread, threadkey);
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

    }

    private sendWelcome(thread: string, threadkey: string) {
        if (this.socket === null) return;
        const welcome_msg =
            JSON.stringify([
                {ping: {content: 'rs:0'}},
                {ping: {content: 'ps:0'}},
                {
                    thread:{
                        version: `20061206`,
                        thread: thread,
                        threadkey: threadkey,
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
            //過去コメントが一気に流れてそれがここで終わるらしい
            return;
        }

        const comment = msg.chat;
        if((comment===undefined || comment.content === undefined || comment.content === '') ||
            (comment.yourpost && comment.yourpost === 1)){
            return;
        }


        this.recieveNicoliveMessage(this.makeChunkedMessage(comment));
        

        // switch (msg['type']) {
        //     case 'disconnect':
        //         this.disconnected(msg as Disconnect);
        //         break;
        //     case 'error':
        //         this.error(msg as Error);
        //         break;
        // }
    }

    private makeChunkedMessage(comment: any){
        const msecs = comment.date*1000+Math.floor(comment.date_usec/1000);
        const iso = new Date(msecs).toISOString();
        const cmt_chk = fromJson(ChunkedMessageSchema, {
                message:{
                       chat:{
                            content: comment.content,
                            name: '',//いるんかこれ？
                            vpos: comment.vpos,
                            account_status: comment.premium??0,
                            hashed_user_id: comment.user_id,
                            modifier: {
                                position: 0,
                                size: 0,
                                named_color: 0,
                                font: 0,
                                opacity: 0
                            }
                        }
                },
            meta:{
                id: '',
                at: iso,
                origin: {
                    chat: {
                        live_id: 0
                    }
                }
            }
        });
        return cmt_chk;
    }

    // private disconnected() {
    //     if (this.socket === null) return;
    //     // console.log('disconnect: ', msg.data.reason);
    //     if (this._onDisconnectMessageServer != null) {
    //         this._onDisconnectMessageServer(msg);
    //     }
    // }
    // private error() {
    //     if (this.socket === null) return;
    //     // console.log('error: ', msg.body.code);
    //     if (this._onErrorMessageServer != null) {
    //         this._onErrorMessageServer();
    //     }
    // }

    public onRecieveNicoliveMessage(callback: ((msg: ChunkedMessage) => any)) {
        this._onRecieveChunkedMessages.add(callback);
    }
    public offRecieveNicoliveMessage(callback: ((msg: ChunkedMessage) => any)) {
        this._onRecieveChunkedMessages.delete(callback);
    }
    private recieveNicoliveMessage(msg: ChunkedMessage){
        for(const c of this._onRecieveChunkedMessages){
            c(msg);
        }
    }
    // set onDisconnectMessageServer(callback: ((msg: Disconnect) => any) | null) {
    //     this._onDisconnectMessageServer = callback;
    // }
    // set onErrortMessageServer(callback: ((msg: Error) => any) | null) {
    //     this._onErrorMessageServer = callback;
    // }
}
