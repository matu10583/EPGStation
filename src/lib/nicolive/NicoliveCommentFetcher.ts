//created by matu10583
//ニコ生のコメントを取ってくる
import INicoliveMessageClient from './INicoliveMessageClient';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import { NicoliveCommentData } from '../../model/service/socketio/ISocketIOManageModel';

interface DataProps {
    site: {
        relive: {
            webSocketUrl?: string;
        };
    };
}

// @injectable()
export default class NicoliveCommentFetcher implements INicoliveCommentFetcher{
    private msg_client: INicoliveMessageClient;
    private connect_refcount: number = 0;
    private comment_recieve_callback: Set<(data: NicoliveCommentData)=>any> = new Set();
    private page_url: string;

    constructor(
        _client: INicoliveMessageClient,
        page_url: string
    ) {
        this.msg_client = _client
        this.page_url = page_url
    }
    getConnectionRefCount(): number {
        return this.connect_refcount;
    }


    public async addConnection(): Promise<number> {
        if(this.connect_refcount>0){
            this.connect_refcount++;
            return this.connect_refcount;
        }

        const wsurl = await this.fetchWSUrl(this.page_url);
        if (wsurl == '') {
            console.error('web socket url not found');
            return this.connect_refcount;
        }
        await this.msg_client.connect(wsurl);
        //TODO: メッセージサーバーコールバック登録
        
        
        this.connect_refcount++;
        return this.connect_refcount;
    }

    public decreaseConnection(): number {
        this.connect_refcount--;
        if(this.connect_refcount===0){
            this.msg_client.disconnect(1000, 'Normal Closure');
        }
        //念のため正常化
        if(this.connect_refcount<0){
            this.connect_refcount=0;
        }
        return this.connect_refcount;
    }

    public forceDisconnect(){
        this.connect_refcount=0;
        this.msg_client.disconnect(1000, 'Normal Closure');
    }

    public onRecieveComment(callback:((msg: NicoliveCommentData)=>any)){
        //コメント取得時のコールバック
        this.comment_recieve_callback.add(callback);
    }
    public offRecieveComment(callback:((msg: NicoliveCommentData)=>any)){
        //コメント取得時のコールバック
        this.comment_recieve_callback.delete(callback);
    }
    public runRecieveCallback(msg: NicoliveCommentData){
        for(const c of this.comment_recieve_callback){
            c(msg);
        }
    }

    private async fetchWSUrl(url: string): Promise<string> {
        const html = await fetch(url, { method: 'GET' }).then(function (response) {
            return response.text();
        });
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const script = doc.querySelector('script[data-props]');
        if (!script) {
            console.error('No data-props');
            return '';
        }
        const props = script.getAttribute('data-props');
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
