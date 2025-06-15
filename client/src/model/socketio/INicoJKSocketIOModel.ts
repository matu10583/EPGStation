import * as proto from '@/gen/proto';
type NicoJKChunkedMessage = proto.dwango.nicolive.chat.service.edge.ChunkedMessage;
type NicoJKConnectedSegment = proto.epgstation.nicojk.service.ConnectedSegment;
export default interface INicoJKSocketIOModel {
    onRecieveNicoLiveMessage(callback: (msg: NicoJKChunkedMessage) => void): void;
    offRecieveNicoLiveMessage(callback: (msg: NicoJKChunkedMessage) => void): void;
    startNicoliveCommentServer(channelId: string): void;
    closeNicoliveCommentServer(channelId: string): void;
    onRecieveConnectMessage(callback: (data: NicoJKConnectedSegment) => void): void;
    offRecieveConnectMessage(callback: (data: NicoJKConnectedSegment) => void): void;
}
