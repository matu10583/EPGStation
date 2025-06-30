import INicoliveSegmentServerClient from './INicoliveSegmentServerClient';
import * as proto from '../proto';
import { decodeChunkStream } from '../ChunkDecoder';

export default class NicoliveSegmentServerClient implements INicoliveSegmentServerClient {
    private baseurl: string;
    private abortController: AbortController = new AbortController();
    constructor(baseUrl: string) {
        this.baseurl = baseUrl;
    }
    public getBaseUrl(): string {
        return this.baseurl;
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
            console.error('error has occured. try reconnecting', e);
        }
        this.abortController.abort();
        // while (!this.abortController.signal.aborted) {

        // }
    }
}
