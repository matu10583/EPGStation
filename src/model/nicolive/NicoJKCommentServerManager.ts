import { inject, injectable } from 'inversify';
import INicoJKCommentServerManager from './INicoJKCommentServerManager';
import INicoliveCommentServerModel, {
    NicoliveCommentServerModelFactory,
} from '../../lib/nicolive/INicoliveCommentServerModel';
import IConfiguration from '../IConfiguration';
import { Socket } from 'socket.io';
import { EntrySegment as NicoJKEntry } from '../../lib/gen/epgstation/nicojk/request/EntrySegment_pb';

@injectable()
export default class NicoJKCommentServerManager implements INicoJKCommentServerManager {
    private channel_servers: Map<string, INicoliveCommentServerModel> = new Map();
    // private log: ILogger;

    constructor(
        @inject('NicoliveCommentServerModelFactory') serverFactory: NicoliveCommentServerModelFactory,
        @inject('IConfiguration') configuration: IConfiguration,
    ) {
        const config = configuration.getConfig();
        const jk_urls = config.nicoLive?.jk_url;
        if (jk_urls === undefined) return;

        for (const entity of jk_urls) {
            this.channel_servers.set(
                entity.channel.toString(),
                serverFactory({
                    url: entity.url,
                }),
            );
        }
    }
    async connectClient(client: Socket, data: NicoJKEntry): Promise<boolean> {
        const server = this.channel_servers.get(data.channelId);
        if (server === undefined) {
            return false;
        }
        return await server.connectClient(client);
    }
    disconnectClient(client: Socket, data: NicoJKEntry): void {
        const server = this.channel_servers.get(data.channelId);
        if (server === undefined) {
            return;
        }
        server.disconnectClient(client);
    }
}
