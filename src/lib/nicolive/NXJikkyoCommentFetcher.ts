//created by matu10583
//ニコ生のコメントを取ってくる
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import type { ChunkedMessage } from '../proto';
import { ConnectedSegment, ConnectedSegmentSchema } from '../gen/epgstation/nicojk/service/ConnectedSegment_pb';
import { create } from '@bufbuild/protobuf';
// import { LiveProps } from '../gen/epgstation/nicojk/service/data/LiveProps_pb';
import INXJikkyoWebSocketClient from './INXJikkyoWebSocketClient';
import INicoliveWebSocketClient, { NXJKRoom } from './INicoliveWebSocketClient';

// @injectable()
export default class NXJikkyoCommentFetcher implements INicoliveCommentFetcher {
    private comment_session: INXJikkyoWebSocketClient;
    private watch_sessiont: INicoliveWebSocketClient;
    
    private jikkyo_api: string;
    private connectedSeg: ConnectedSegment | null = null;
    

    constructor(
        _comment_session: INXJikkyoWebSocketClient,
        _watch_session: INicoliveWebSocketClient,
        
        jikkyo_api: string,
    ) {
        this.watch_sessiont = _watch_session;
        this.jikkyo_api = jikkyo_api;
        this.comment_session = _comment_session;
    }
    

    connected(): boolean {
        return this.watch_sessiont.connected();
    }

    public async connect(): Promise<boolean> {
        const data = await fetch(this.jikkyo_api);
        if(!data.ok) return false;
        const connection_info = await data.json();
        const ws_url = connection_info.watch_session_url;
        if (ws_url == null) return false;


        this.watch_sessiont.onRecieveRoom = async (msg)=>{
           this.connectCommentSession(msg, connection_info.comment_session_url);
        }
        this.watch_sessiont.onDisconnectMessageServer = this.onDisconnectMessageServer;
        this.watch_sessiont.onErrortMessageServer = this.onDisconnectMessageServer;
        await this.watch_sessiont.connect(ws_url);

        return true;
    }

    private async connectCommentSession(msg: NXJKRoom, url: string){
        await this.comment_session.connect(url, msg.data.threadId, msg.data.yourPostKey);
        const date = new Date(msg.data.vposBaseTime)
        this.connectedSeg = create(ConnectedSegmentSchema, {
            props: {
                site: {
                    relive: {
                        webSocketUrl: url
                    }
                },
                program: {
                    vposBaseTime: Math.floor(date.getTime()/1000),
                    watchPageUrl: '',
                }
            }
        });
    }


    private async onDisconnectMessageServer() {
        let tryCount = 0;
        const maxTry = 5;
        const sleepTime = 1000;
        while (true) {
            const result = await this.redirect(sleepTime);
            if (result) {
                break;
            }
            tryCount++;
            if (tryCount >= maxTry) {
                break;
            }
        }
        //無理やったらすっぱりあきらめ
        this.disconnect();
    }


    public disconnect(): void {
        
        this.comment_session.disconnect();
        this.watch_sessiont.disconnect(1000, 'Normal Closure');
        this.connectedSeg = null;
    }

    getConnectedSegment() {
        return this.connectedSeg;
    }

    private async redirect(sleep: number) {
        if (sleep > 0) await new Promise(resolve => setTimeout(() => resolve, sleep));
        this.disconnect();
        return await this.connect();
    }

    public onRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any) {
        //コメント取得時のコールバック
        this.comment_session.onRecieveNicoliveMessage(callback);
    }
    public offRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any) {
        //コメント取得時のコールバック
        this.comment_session.offRecieveNicoliveMessage(callback);
    }

}
