import { inject, injectable } from 'inversify';
import * as socketIo from 'socket.io-client';
import Util from '../../util/Util';
import IServerConfigModel from '../serverConfig/IServerConfigModel';
import ISocketIOModel from './ISocketIOModel';
import * as proto from '@/gen/proto';
type NicoJKMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
const NicoJKMessageScheme = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
type NicoJKChunkedEntry = proto.epgstation.nicojk.service.edge.ChunkedEntry;
const NicoJKChunkedEntryScheme = proto.epgstation.nicojk.service.edge.ChunkedEntry;

@injectable()
class SocketIOModel implements ISocketIOModel {
    private serverConfiModel: IServerConfigModel;
    private io: socketIo.Socket | null = null;
    private onRecieveNicoliveWrappedMap: Map<(msg: NicoJKMessage) => any, (msg: ArrayBuffer) => any> = new Map();

    constructor(@inject('IServerConfigModel') serverConfiModel: IServerConfigModel) {
        this.serverConfiModel = serverConfiModel;
    }

    /**
     * SokcetIO 初期設定
     */
    public Iinitialize(): void {
        const config = this.serverConfiModel.getConfig();
        if (config === null || this.io !== null) {
            throw new Error('InitializationSocketIOError');
        }

        this.io = socketIo.io(`${location.protocol}//${location.hostname}:${config.socketIOPort}`, {
            path: `${Util.getSubDirectory()}/socket.io`,
        });
    }

    /**
     * 設定済み socketIO をのインスタを返す
     */
    public getIO(): socketIo.Socket | null {
        return this.io;
    }

    /**
     * update status イベントへのコールバック追加
     * @param callback: () => void
     */
    public onUpdateState(callback: () => void): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }

        this.io.on(SocketIOModel.UPDATE_STATUS_EVENT, callback);
    }

    /**
     * update status イベントへのコールバック削除
     * @param callback: () => void
     */
    public offUpdateState(callback: () => void): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }

        this.io.off(SocketIOModel.UPDATE_STATUS_EVENT, callback);
    }

    /**
     * update encode status イベントへのコールバック追加
     * @param callback: () => void
     */
    public onUpdateEncodeState(callback: () => void): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }

        this.io.on(SocketIOModel.UPDATE_ENCODE_STATUS_EVENT, callback);
    }

    /**
     * update encode status イベントへのコールバック削除
     * @param callback: () => void
     */
    public offUpdateEncodeState(callback: () => void): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }

        this.io.off(SocketIOModel.UPDATE_ENCODE_STATUS_EVENT, callback);
    }

    /**
     * recieve nicolive comments イベントへのコールバック追加
     * @param callback: () => void
     */
    public onRecieveNicoLiveMessage(callback: (msg: NicoJKMessage) => void): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }
        if (this.onRecieveNicoliveWrappedMap.has(callback)) {
            console.log('it has registered.');
            return;
        }

        const wrapped = (msg: ArrayBuffer) => callback(NicoJKMessageScheme.decode(new Uint8Array(msg)));
        this.onRecieveNicoliveWrappedMap.set(callback, wrapped);
        this.io.on(SocketIOModel.RECIEVE_NICOLIVE_MESSAGE, wrapped);
    }

    /**
     * recieve nicolive comments イベントへのコールバック削除
     * @param callback: () => void
     */
    public offRecieveNicoLiveMessage(callback: (msg: NicoJKMessage) => void): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }
        console.log('unregistered');
        const wrapped = this.onRecieveNicoliveWrappedMap.get(callback);
        if (wrapped === undefined) return;
        this.io.off(SocketIOModel.RECIEVE_NICOLIVE_MESSAGE, wrapped);
    }

    /**
     * nicolive commentのサーバーへ接続
     * @param callback: () => void
     */
    public startNicoliveCommentServer(channelId: string): void {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }
        const chunk = NicoJKChunkedEntryScheme.encode({
            channelId: channelId,
        }).finish();
        this.io.emit(SocketIOModel.START_NICOLIVE_COMMENT, chunk);
    }

    /**
     * nicolive commentのサーバーを切断
     * @param callback: () => void
     */
    public closeNicoliveCommentServer(channelId: string) {
        if (this.io === null) {
            throw new Error('IOIsNull');
        }

        const chunk = NicoJKChunkedEntryScheme.encode({
            channelId: channelId,
        }).finish();
        this.io.emit(SocketIOModel.CLOSE_NICOLIVE_COMMENT, chunk);
    }
}

namespace SocketIOModel {
    export const UPDATE_STATUS_EVENT = 'updateStatus';
    export const UPDATE_ENCODE_STATUS_EVENT = 'updateEncode';
    export const RECIEVE_NICOLIVE_MESSAGE = 'nicoliveMessage';
    export const START_NICOLIVE_COMMENT = 'joinNicolive';
    export const CLOSE_NICOLIVE_COMMENT = 'leaveNicolive';
}

export default SocketIOModel;
