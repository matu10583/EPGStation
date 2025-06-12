import { ChunkedEntry as NicoJKEntry } from '../../lib/gen/epgstation/nicojk/service/edge/ChunkedEntry_pb';
import * as SocketIO from 'socket.io';

export default interface INicoJKCommentServerManager {
    connectClient(client: SocketIO.Socket, data: NicoJKEntry): Promise<boolean>;
    disconnectClient(client: SocketIO.Socket, data: NicoJKEntry): void;
}
