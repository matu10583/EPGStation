import INicoliveSegmentServerClient from './INicoliveSegmentServerClient';
import * as proto from '../proto';
import { decodeChunkStream } from '../ChunkDecoder';

export default class NicoliveSegmentServerClient implements INicoliveSegmentServerClient {
    private baseurl: string;
    private abortController: AbortController = new AbortController();
    constructor(baseUrl: string) {
        this.baseurl = baseUrl;
    }
    disconnect(): void {
        this.abortController.abort();
    }
    public onRecieveComment: ((msg: proto.ChunkedMessage) => any) | null = null;

    public connected(): boolean {
        return !this.abortController.signal.aborted;
    }

    public async runConnect() {
        this.abortController = new AbortController();
        while (!this.abortController.signal.aborted) {
            try {
                const response = await fetch(this.baseurl, {
                    signal: this.abortController?.signal,
                });

                for await (const chunk of decodeChunkStream(
                    proto.ChunkedMessageSchema,
                    response.body as ReadableStream<Uint8Array>,
                )) {
                    if (this.onRecieveComment !== null) {
                        this.onRecieveComment(chunk);
                    }
                }
            } catch (e) {
                if (e == 'OperationCanceledException') {
                    //正常な終了
                    this.abortController?.abort();
                } else {
                    console.error('error has occured. try reconnecting');
                }
            }
        }
    }
}
