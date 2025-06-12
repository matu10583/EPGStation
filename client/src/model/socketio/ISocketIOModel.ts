import * as socketIo from 'socket.io-client';
import * as proto from '@/gen/proto';
type NicoJKChunkedMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;

export const UPDATE_EVENT = 'updateStatus';

export default interface ISocketIOModel {
    Iinitialize(): void;
    getIO(): socketIo.Socket | null;
    onUpdateState(callback: () => void): void;
    offUpdateState(callback: () => void): void;
    onUpdateEncodeState(callback: () => void): void;
    offUpdateEncodeState(callback: () => void): void;
    onRecieveNicoLiveMessage(callback: (msg: NicoJKChunkedMessage) => void): void;
    offRecieveNicoLiveMessage(callback: (msg: NicoJKChunkedMessage) => void): void;
    startNicoliveCommentServer(channelId: string): void;
    closeNicoliveCommentServer(channelId: string): void;
}
