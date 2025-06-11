//created by matu10583
//ニコ生のコメントを取ってくる
import INicoliveWebSocketClient, { MessageServer } from './INicoliveWebSocketClient';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import * as cheerio from 'cheerio';
import INicoliveSegmentServerClient, { NicoliveSegmentServerClientFactory } from './INicoliveSegmentServerClient';
import type { ChunkedMessage, MessageSegment } from '../proto';
import INicoliveMessageServerClient from './INicoliveMessageServerClient';

interface DataProps {
    site: {
        relive: {
            webSocketUrl?: string;
        };
    };
}

// @injectable()
export default class NicoliveCommentFetcher implements INicoliveCommentFetcher {
    private ws_client: INicoliveWebSocketClient;
    private msg_client: INicoliveMessageServerClient;
    private segment_factory: NicoliveSegmentServerClientFactory;
    private seg_clients: Array<INicoliveSegmentServerClient> = [];
    private comment_recieve_callback: Set<(data: ChunkedMessage) => any> = new Set();
    private page_url: string;

    constructor(
        _wsclient: INicoliveWebSocketClient,
        _msgclient: INicoliveMessageServerClient,
        _segFactory: NicoliveSegmentServerClientFactory,
        page_url: string,
    ) {
        this.ws_client = _wsclient;
        this.page_url = page_url;
        this.msg_client = _msgclient;
        this.segment_factory = _segFactory;
    }
    connected(): boolean {
        return this.ws_client.connected();
    }

    public async connect(): Promise<boolean> {
        const wsurl = await this.fetchWSUrl(this.page_url);
        if (wsurl == '') {
            console.error('web socket url not found');
            return false;
        }
        this.ws_client.onRecieveMessageServer = (msg)=>this.onRecieveMessageServer(msg);
        await this.ws_client.connect(wsurl);

        return true;
    }

    private onRecieveMessageServer(msg: MessageServer) {
        this.msg_client.setBaseUrl(msg.data.viewUri);
        this.msg_client.onRecieveSegment =(msg)=> this.onSegmentMessage(msg);
        this.msg_client.runConnect();
    }

    private onSegmentMessage(msg: MessageSegment) {
        const seg = this.segment_factory(msg);
        seg.onRecieveComment = (msg)=>this.onRecieveSegmentMessage(msg);
        seg.runConnect();
        this.seg_clients = this.seg_clients.filter(c => {
            return c.connected();
        });
        this.seg_clients.push(seg);
    }

    public disconnect(): void {
        for(const c of this.seg_clients){
            c.disconnect();
        }
        this.seg_clients.length=0;
        this.msg_client.disconnect();
        this.ws_client.disconnect(1000, 'Normal Closure');

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

    private async fetchWSUrl(url: string): Promise<string> {
        const html = await fetch(url, { method: 'GET' }).then(async response => {
            return await response.text();
        });
        const $ = cheerio.load(html);

        const script = $('script[data-props]');
        if (!script) {
            console.error('No data-props');
            return '';
        }
        const props = script.attr('data-props');
        if (!props) {
            console.error('No data-props');
            return '';
        }
        const props_obj = JSON.parse(props) as DataProps;
        if (!('webSocketUrl' in props_obj['site']['relive'])) {
            console.error('Stream is Finished');
            return '';
        }
        return props_obj['site']['relive']['webSocketUrl'] as string;
    }
}
