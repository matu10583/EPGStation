import { injectable, inject } from 'inversify';
import INicoJKSocketIOModel from './INicoJKSocketIOModel';
import ISocketIOModel from './ISocketIOModel';
import * as proto from '@/gen/proto';
type NicoJKMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
const NicoJKMessageScheme = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
type NicoJKChunkedEntry = proto.epgstation.nicojk.request.EntrySegment;
const NicoJKChunkedEntryScheme = proto.epgstation.nicojk.request.EntrySegment;

@injectable()
export default class NicoJKSocketIOModel implements INicoJKSocketIOModel {
    socketIO: ISocketIOModel;
    private onRecieveNicoliveWrappedMap: Map<(msg: NicoJKMessage) => any, (msg: ArrayBuffer) => any> = new Map();

    constructor(@inject('ISocketIOModel') socketIO: ISocketIOModel) {
        this.socketIO = socketIO;
    }
    private getIO() {
        return this.socketIO.getIO();
    }

    /**
     * recieve nicolive comments イベントへのコールバック追加
     * @param callback: () => void
     */
    public onRecieveNicoLiveMessage(callback: (msg: NicoJKMessage) => void): void {
        if (this.onRecieveNicoliveWrappedMap.has(callback)) {
            console.log('it has registered.');
            return;
        }

        const wrapped = (msg: ArrayBuffer) => callback(NicoJKMessageScheme.decode(new Uint8Array(msg)));
        this.onRecieveNicoliveWrappedMap.set(callback, wrapped);
        this.getIO()?.on(SocketIOModel.RECIEVE_NICOLIVE_MESSAGE, wrapped);
    }

    /**
     * recieve nicolive comments イベントへのコールバック削除
     * @param callback: () => void
     */
    public offRecieveNicoLiveMessage(callback: (msg: NicoJKMessage) => void): void {
        console.log('unregistered');
        const wrapped = this.onRecieveNicoliveWrappedMap.get(callback);
        if (wrapped === undefined) return;
        this.getIO()?.off(SocketIOModel.RECIEVE_NICOLIVE_MESSAGE, wrapped);
    }

    /**
     * nicolive commentのサーバーへ接続
     * @param callback: () => void
     */
    public startNicoliveCommentServer(channelId: string): void {
        const chunk = NicoJKChunkedEntryScheme.encode({
            channelId: channelId,
        }).finish();
        this.getIO()?.emit(SocketIOModel.START_NICOLIVE_COMMENT, chunk);
    }

    /**
     * nicolive commentのサーバーを切断
     * @param callback: () => void
     */
    public closeNicoliveCommentServer(channelId: string) {
        const chunk = NicoJKChunkedEntryScheme.encode({
            channelId: channelId,
        }).finish();
        this.getIO()?.emit(SocketIOModel.CLOSE_NICOLIVE_COMMENT, chunk);
    }
}
namespace SocketIOModel {
    export const RECIEVE_NICOLIVE_MESSAGE = 'nicoliveMessage';
    export const START_NICOLIVE_COMMENT = 'joinNicolive';
    export const CLOSE_NICOLIVE_COMMENT = 'leaveNicolive';
}
