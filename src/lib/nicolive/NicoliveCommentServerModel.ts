import { injectable } from 'inversify';
import INicoliveCommentServerModel from './INicoliveCommentServerModel';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import * as SocketIO from 'socket.io';
import { ChunkedMessage, ChunkedMessageSchema } from '../proto';
import { toBinary } from '@bufbuild/protobuf';
import { ConnectedSegmentSchema } from '../gen/epgstation/nicojk/service/ConnectedSegment_pb';

@injectable()
export default class NicoliveCommentServerModel implements INicoliveCommentServerModel {
    private comment_fetcher!: INicoliveCommentFetcher;
    private clients: Set<SocketIO.Socket> = new Set();
    private timeOut: number = 30000;

    constructor() {}

    init(fetcher: INicoliveCommentFetcher): void {
        this.comment_fetcher = fetcher;
        this.comment_fetcher.onRecieveNicoliveMessage(msg => this.broadcastComments(msg));
    }

    async connectClient(client: SocketIO.Socket): Promise<boolean> {
        if (!this.comment_fetcher.connected()) {
            const result = await this.connectNicoliveServer();
            if (!result) return false;
        }

        this.clients.add(client);
        let seg = this.comment_fetcher.getConnectedSegment();
        let timeElapsed = 0;
        const retryInterval = 100;
        while(seg == null){
            timeElapsed+=retryInterval;
            if(timeElapsed>this.timeOut){
                throw new Error('connection timed out');
            }
            seg = this.comment_fetcher.getConnectedSegment();
            await new Promise(resolve=>setTimeout(resolve, retryInterval));
        }
        if (seg == null) return false;
        client.emit('connectedNicolive', toBinary(ConnectedSegmentSchema, seg));
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
        const chunk = toBinary(ChunkedMessageSchema, msg);
        this.emitAllSocet('nicoliveMessage', chunk);
    }

    private emitAllSocet(ev: string, ...args: any[]) {
        for (const c of this.clients) {
            c.emit(ev, ...args);
        }
    }
}
