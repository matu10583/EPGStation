import { MessageSegment } from '../proto';

export default interface INicoliveMessageServerClient {
    onRecieveSegment: ((seg: MessageSegment) => any) | null;

    setBaseUrl(url: string): void;

    runConnect(): void;
    disconnect():void;
}
