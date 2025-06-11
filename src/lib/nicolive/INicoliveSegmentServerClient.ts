import { MessageSegment } from "../proto";
import { ChunkedMessage } from "../proto";

export type NicoliveSegmentServerClientFactory = (msg: MessageSegment) => INicoliveSegmentServerClient;

export default interface INicoliveSegmentServerClient {
    onRecieveComment: ((msg: ChunkedMessage) => any) | null;

    connected(): boolean;
    runConnect(): void;
    disconnect():void;
}
