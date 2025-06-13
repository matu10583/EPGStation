import INicoliveMessageServerClient from './INicoliveMessageServerClient';
import { decodeChunkStream } from '../ChunkDecoder';
import type {
    // BackwardSegment,
    // ChunkedEntry_ReadyForNext,
    MessageSegment,
} from '../proto';
import * as proto from '../proto';

export default class NicoliveMessageServerClient implements INicoliveMessageServerClient {
    private abortController: AbortController = new AbortController();
    private baseurl: string | null = null;
    private nextStreamAt: string = 'now';
    public onRecieveSegment: ((seg: MessageSegment) => any) | null = null;
    private loopPromise: Promise<void>|null = null;
    constructor() {}

    public setBaseUrl(url: string) {
        this.baseurl = url;
    }

    public async waitDisconnect():Promise<void>{
        this.disconnect();
        if(this.loopPromise===null) return;
        await this.loopPromise;
    }

    public disconnect(){
        this.abortController.abort();

    }
    public async runConnect() {
        this.loopPromise = this.loopcontent();
    }

    private async loopcontent(): Promise<void>{
        this.abortController = new AbortController();
        while (!this.abortController.signal.aborted) {
            try {
                const send_url = `${this.baseurl}?at=${this.nextStreamAt}`;
                const response = await fetch(send_url, {
                    signal: this.abortController.signal,
                    headers: {
                        Priority: 'u=1, i',
                    },
                });
                console.log(response.statusText);
                for await (const chunk of decodeChunkStream(
                    proto.ChunkedEntrySchema,
                    response.body as ReadableStream<Uint8Array>,
                )) {
                    const entry = chunk.entry;
                    switch (entry.case) {
                        case 'segment':
                            this.processSegment(entry.value);
                            break;
                        case 'backward':
                            //2個よりまえの過去コメ
                            break;
                        case 'previous':
                            //backward~segmentまでのコメ
                            break;
                        case 'next':
                            this.nextStreamAt = entry.value.at.toString();
                            break;
                    }
                }
            } catch (e) {
                console.error('error has occured. try reconnecting');
            }
        }
    }

    private processSegment(seg: MessageSegment) {
        if (this.onRecieveSegment !== null) {
            this.onRecieveSegment(seg);
        }
    }
}
