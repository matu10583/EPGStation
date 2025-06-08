//created by matu10583
//ニコ生のコメントを取ってくる
import { inject, injectable } from 'inversify';
import INicoliveMessageClient from './INicoliveMessageClient';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';

interface DataProps {
    site: {
        relive: {
            webSocketUrl?: string;
        };
    };
}

@injectable()
export default class NicoliveCommentFetcher implements INicoliveCommentFetcher{
    private msg_client: INicoliveMessageClient;

    constructor(
        @inject('INicoliveMessageClient') _client: INicoliveMessageClient,
    ) {
        this.msg_client = _client
    }

    private createNicoliveURL(page_id: string): string{
        return `https://live.nicovideo.jp/watch/lv${page_id}`;
    }

    public async connect(page_id: string): Promise<boolean> {
        const wsurl = await this.fetchWSUrl(this.createNicoliveURL(page_id));
        if (wsurl == '') {
            console.error('web socket url not found');
            return false;
        }

        await this.msg_client.connect(wsurl);
        return true;
    }

    public disconnect() {
        this.msg_client.disconnect(1000, 'Normal Closure');
    }

    private async fetchWSUrl(url: string): Promise<string> {
        const html = await fetch(url, { method: 'GET' }).then(function (response) {
            return response.text();
        });
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const script = doc.querySelector('script[data-props]');
        if (!script) {
            console.error('No data-props');
            return '';
        }
        const props = script.getAttribute('data-props');
        if (!props) {
            console.error('No data-props');
            return '';
        }
        const props_obj = JSON.parse(props) as DataProps;
        if (!('webSocketUrl' in props_obj['site']['relive'])) {
            console.error('Stream is Finished');
            return '';
        }
        return props_obj['site']['relive']['webSocketUrl'] as string;
    }
}
