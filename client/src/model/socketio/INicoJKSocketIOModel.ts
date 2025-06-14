
import * as proto from '@/gen/proto';
type NicoJKChunkedMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
export default interface INicoJKSocketIOModel{
    onRecieveNicoLiveMessage(callback: (msg: NicoJKChunkedMessage) => void): void;
    offRecieveNicoLiveMessage(callback: (msg: NicoJKChunkedMessage) => void): void;
    startNicoliveCommentServer(channelId: string): void;
    closeNicoliveCommentServer(channelId: string): void;
}