import { injectable, inject } from 'inversify';
import INicoJKSocketIOModel from './INicoJKSocketIOModel';
import ISocketIOModel from './ISocketIOModel';
import * as proto from '@/gen/proto';
type NicoJKMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
const NicoJKMessageScheme = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
const NicoJKChunkedEntryScheme = proto.epgstation.nicojk.request.EntrySegment;
type NicoJKConnectedSegment = proto.epgstation.nicojk.service.ConnectedSegment;
const NicoJKConnectedSegmentSchema = proto.epgstation.nicojk.service.ConnectedSegment;

@injectable()
export default class NicoJKSocketIOModel implements INicoJKSocketIOModel {
    socketIO: ISocketIOModel;
    private onRecieveNicoliveWrappedMap: Map<(msg: NicoJKMessage) => any, (msg: ArrayBuffer) => any> = new Map();
    private onConnectNicoliveWrappedMap: Map<(msg: NicoJKConnectedSegment) => any, (msg: ArrayBuffer) => any> = new Map();

    constructor(@inject('ISocketIOModel') socketIO: ISocketIOModel) {
        this.socketIO = socketIO;
    }
    onRecieveConnectMessage(callback: (data: NicoJKConnectedSegment) => void): void {
        if (this.onConnectNicoliveWrappedMap.has(callback)) {
            console.log('it has registered.');
            return;
        }

        const wrapped = (msg: ArrayBuffer) => callback(NicoJKConnectedSegmentSchema.decode(new Uint8Array(msg)));
        this.onConnectNicoliveWrappedMap.set(callback, wrapped);
        this.getIO()?.on(SocketIOModel.CONNECTED_NICOLIVE, wrapped);
    }
    offRecieveConnectMessage(callback: (data: NicoJKConnectedSegment) => void): void {
        console.log('unregistered');
        const wrapped = this.onConnectNicoliveWrappedMap.get(callback);
        if (wrapped === undefined) return;
        this.getIO()?.off(SocketIOModel.CONNECTED_NICOLIVE, wrapped);
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
    export const CONNECTED_NICOLIVE = 'connectedNicolive';
}
