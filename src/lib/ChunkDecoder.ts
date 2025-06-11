import { fromBinary, MessageShape } from '@bufbuild/protobuf';
import { DescMessage } from '@bufbuild/protobuf';

export async function* decodeChunkStream<T extends DescMessage>(
    schema: T,
    readable: ReadableStream<Uint8Array>,
): AsyncGenerator<MessageShape<T>> {
    const decoder = new ChunkDecoder(schema);
    const reader = readable.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }

        decoder.push(value);
        for (const chunk of decoder.read()) {
            yield chunk;
        }
    }
}

export function decodeChunks<T extends DescMessage>(schema: T, body: Uint8Array): MessageShape<T>[] {
    const decoder = new ChunkDecoder(schema);
    decoder.push(body);
    return decoder.read();
}

export default class ChunkDecoder<T extends DescMessage> {
    private readonly schema: T;
    private buffer: Uint8Array = new Uint8Array();
    private cursor = 0;

    constructor(schema: T) {
        this.schema = schema;
    }

    push(buffer: Uint8Array): void {
        const newBuffer = new Uint8Array(this.buffer.length + buffer.length);
        newBuffer.set(this.buffer, 0);
        newBuffer.set(buffer, this.buffer.length);
        this.buffer = newBuffer;
    }

    read(): MessageShape<T>[] {
        const chunks: MessageShape<T>[] = [];

        outer: while (this.cursor < this.buffer.length) {
            let chunkBodySize = 0;
            let flagContinueHeader = false;
            const chunkHeaderStart = this.cursor;
            //Header解析
            //上位1ビットが次のバイトもヘッダーが続くかのフラグ
            //下位7ビットにはサイズが入っており、下位から７ビットずつ送られてくる
            do {
                //データが足りてなさそうです
                if (this.cursor >= this.buffer.length) {
                    this.cursor = chunkHeaderStart;
                    break outer;
                }
                const byte = this.buffer[this.cursor];
                flagContinueHeader = Boolean(byte & 0b10000000);
                chunkBodySize |= (byte & 0b01111111) << ((this.cursor - chunkHeaderStart) * 7);

                this.cursor += 1;
            } while (flagContinueHeader);

            const chunkBodyStart = this.cursor;
            const chunkBodyEnd = chunkBodyStart + chunkBodySize;

            // データが足りてないってよ
            if (chunkBodyEnd > this.buffer.length) {
                this.cursor = chunkHeaderStart;
                break;
            }

            //Protbufデコード
            //デコードのためにはスキーマファイルが必要になる。これはbufbuildのパッケージで作る
            //ほかの例を見るに、同じパッケージでランタイムのデコードも可能なので次はそこから始める
            // protobuf.parse()
            chunks.push(fromBinary(this.schema, this.buffer.slice(chunkBodyStart, chunkBodyEnd)));
            this.cursor = chunkBodyEnd;
        }

        return chunks;
    }
}
