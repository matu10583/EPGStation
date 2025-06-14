import { EntrySegment as NicoJKEntry } from '../../lib/gen/epgstation/nicojk/request/EntrySegment_pb';
import * as SocketIO from 'socket.io';

export default interface INicoJKCommentServerManager {
    connectClient(client: SocketIO.Socket, data: NicoJKEntry): Promise<boolean>;
    disconnectClient(client: SocketIO.Socket, data: NicoJKEntry): void;
}
