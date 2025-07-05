//created by matu10583
//ニコ生のコメントを取ってくる
import INicoliveWebSocketClient, { Room } from './INicoliveWebSocketClient';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import * as cheerio from 'cheerio';
import INicoliveSegmentServerClient, { NicoliveSegmentServerClientFactory } from './INicoliveSegmentServerClient';
import type { ChunkedMessage, MessageSegment } from '../proto';
import INicoliveMessageServerClient from './INicoliveMessageServerClient';
import { ConnectedSegment, ConnectedSegmentSchema } from '../gen/epgstation/nicojk/service/ConnectedSegment_pb';
import { create } from '@bufbuild/protobuf';
import { LiveProps } from '../gen/epgstation/nicojk/service/data/LiveProps_pb';

// @injectable()
export default class NXJikkyoCommentFetcher implements INicoliveCommentFetcher {
    private ws_client: INicoliveWebSocketClient;
    private msg_client: INicoliveMessageServerClient;
    
    private seg_clients: Array<INicoliveSegmentServerClient> = [];
    private comment_recieve_callback: Set<(data: ChunkedMessage) => any> = new Set();
    private ws_url: string;
    private connectedSeg: ConnectedSegment | null = null;
    

    constructor(
        _wsclient: INicoliveWebSocketClient,
        _msgclient: INicoliveMessageServerClient,
        
        ws_url: string,
    ) {
        this.ws_client = _wsclient;
        this.ws_url = ws_url;
        this.msg_client = _msgclient;
        this.segment_factory = _segFactory;
    }
    

    connected(): boolean {
        return this.ws_client.connected();
    }

    public async connect(): Promise<boolean> {
        // const props_obj = await this.fetchWSUrl(this.page_url);
        // if (props_obj == null) {
        //     console.error('web socket url not found');
        //     return false;
        // }
        const ws_url = this.ws_url
        if (ws_url == null) return false;
        this.ws_client.onRecieveMessageServer = msg => this.onRecieveMessageServer(msg);
        this.ws_client.onDisconnectMessageServer = () => this.onDisconnectMessageServer();
        this.ws_client.onErrortMessageServer = msg => {
            this.disconnect();
            throw new Error(`nicolive connection error: ${msg.body.code}`);
        };
        await this.ws_client.connect(ws_url);

        // this.connectedSeg = create(ConnectedSegmentSchema, {
        //     props: props_obj,
        // });
        return true;
    }

    private async onRecieveMessageServer(msg: Room) {

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
        for (const c of this.seg_clients) {
            c.disconnect();
        }
        this.seg_clients.length = 0;
        this.msg_client.disconnect();
        this.ws_client.disconnect(1000, 'Normal Closure');
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
        this.comment_recieve_callback.add(callback);
    }
    public offRecieveNicoliveMessage(callback: (msg: ChunkedMessage) => any) {
        //コメント取得時のコールバック
        this.comment_recieve_callback.delete(callback);
    }
    private onRecieveSegmentMessage(msg: ChunkedMessage) {
        for (const c of this.comment_recieve_callback) {
            c(msg);
        }
    }

    // private async fetchWSUrl(url: string): Promise<LiveProps | null> {
    //     const html = await fetch(url, { method: 'GET' }).then(async response => {
    //         return await response.text();
    //     });
    //     const $ = cheerio.load(html);

    //     const script = $('script[data-props]');
    //     if (!script) {
    //         console.error('No data-props');
    //         return null;
    //     }
    //     const props = script.attr('data-props');
    //     if (!props) {
    //         console.error('No data-props');
    //         return null;
    //     }
    //     const props_obj = JSON.parse(props) as LiveProps;
    //     return props_obj;
    // }
}
