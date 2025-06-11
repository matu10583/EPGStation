import { injectable } from 'inversify';
import INicoliveCommentServerModel from './INicoliveCommentServerModel';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import * as SocketIO from 'socket.io';
import { ChunkedMessage, ChunkedMessage_Meta, NicoliveMessage } from '../proto';

@injectable()
export default class NicoliveCommentServerModel implements INicoliveCommentServerModel {
    private comment_fetcher!: INicoliveCommentFetcher;
    private clients: Set<SocketIO.Socket> = new Set();
    private timeOut: number = 30000;

    constructor() {}

    init(fetcher: INicoliveCommentFetcher): void {
        this.comment_fetcher = fetcher;
        this.comment_fetcher.onRecieveNicoliveMessage(
            (msg)=>this.broadcastComments(msg));
    }

    async connectClient(client: SocketIO.Socket): Promise<boolean> {
        if (!this.comment_fetcher.connected()) {
            const result = await this.connectNicoliveServer();
            if (!result) return false;
        }

        this.clients.add(client);
        return true;
    }
    disconnectClient(client: SocketIO.Socket): void {
        if (this.clients.has(client)) {
            this.clients.delete(client);
        }
        if (this.clients.size == 0 && this.comment_fetcher.connected()) {
            setTimeout(() => {
                if (this.clients.size == 0 && this.comment_fetcher.connected()) {
                    this.comment_fetcher.disconnect();
                }
            }, this.timeOut);
        }
    }

    private async connectNicoliveServer(): Promise<boolean> {
        const result = await this.comment_fetcher.connect();
        return result;
    }

    // public onRecieveComment(callback: (msg: NicoliveCommentData) => any) {
    //     const fetcher = this.comment_fetcher
    //     if (fetcher === null) return;
    //     fetcher.onRecieveComment(callback);
    // }
    // public offRecieveComment( callback: (msg: NicoliveCommentData) => any) {
    //     const fetcher = this.comment_fetcher
    //     if (fetcher === null) return;
    //     fetcher.offRecieveComment(callback);
    // }

    private broadcastComments(msg: ChunkedMessage) {
        //今のとこ必要なデータは限定的なので絞っておく
        switch(msg.payload.case){
            case "message":
                this.broadcastMessage(msg.payload.value, msg.meta);
            break;
            default:
                break;
        }

    }

    //TODO: イベント名どっかに変数で保存しとく
    private broadcastMessage(message: NicoliveMessage, meta: ChunkedMessage_Meta|undefined){
        switch(message.data.case){
            case "chat":
            this.emitAllSocet('nicoliveChat', message.data.value, meta);
                break;
            default:
                break;
        }
    }

    private emitAllSocet(ev:string, ...args:any[]){
        for (const c of this.clients) {
            c.emit(ev, ...args);
        }
    }
}
