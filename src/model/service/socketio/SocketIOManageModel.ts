import * as http from 'http';
import { inject, injectable } from 'inversify';
import * as SocketIO from 'socket.io';
import urljoin from 'url-join';
import IConfigFile from '../../IConfigFile';
import IConfiguration from '../../IConfiguration';
import ILogger from '../../ILogger';
import ILoggerModel from '../../ILoggerModel';
import ISocketIOManageModel from './ISocketIOManageModel';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import INicoJKCommentServerManager from '../../nicolive/INicoJKCommentServerManager';
import container from '../../ModelContainer';
import {
    ChunkedEntry as NicoJKEntry,
    ChunkedEntrySchema as NicoJKEntrySchema,
} from '../../../lib/gen/epgstation/nicojk/service/edge/ChunkedEntry_pb';
import { fromBinary } from '@bufbuild/protobuf';
// import { fromJson } from '@bufbuild/protobuf';

interface SocketData {
    nicoliveRoomData?: NicoJKEntry;
}

@injectable()
export default class SocketIOManageModel implements ISocketIOManageModel {
    private log: ILogger;
    private config: IConfigFile;
    private ios: SocketIO.Server[] = [];
    private callTimer: NodeJS.Timer | null = null;
    private encodeProgressCallTimer: NodeJS.Timer | null = null;

    constructor(@inject('ILoggerModel') logger: ILoggerModel, @inject('IConfiguration') configuration: IConfiguration) {
        this.log = logger.getLogger();
        this.config = configuration.getConfig();
    }

    /**
     * socket.io 初期化
     * @param servers: http.Server[]
     */
    public initialize(servers: http.Server[]): void {
        for (const s of servers) {
            this.ios.push(
                new SocketIO.Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, SocketData>(s, {
                    path:
                        typeof this.config.subDirectory === 'undefined'
                            ? '/socket.io'
                            : urljoin(this.config.subDirectory, '/socket.io'),
                    cors: {
                        origin: '*',
                    },
                }),
            );
            this.registerNicoJKCallback(this.ios[this.ios.length - 1]);
        }

        this.log.system.info('SocketIO Server has started.');
    }

    private registerNicoJKCallback(io: SocketIO.Server) {
        io.on('connection', socket => {
            this.log.system.info('connect socket');
            socket.data.nicoliveRoomData = null;
            socket.on('joinNicolive', async (req: ArrayBuffer) => {
                try{
                const decoded = fromBinary(NicoJKEntrySchema, new Uint8Array(req));
                const nicoJKManager = container.get<INicoJKCommentServerManager>('INicoJKCommentServerManager');
                await nicoJKManager.connectClient(socket, decoded);
                socket.data.nicoliveRoomData = decoded;
                }
                catch(e){
                    console.error(e);
                }
            });

            socket.on('leaveNicolive', () => {
                const nicoJKManager = container.get<INicoJKCommentServerManager>('INicoJKCommentServerManager');
                nicoJKManager.disconnectClient(socket, socket.data.nicoliveRoomData);
                socket.data.nicoliveRoomData = null;
            });
            socket.on('disconnecting', () => {
                if(socket.data.nicoliveRoomData===null) return;
                const nicoJKManager = container.get<INicoJKCommentServerManager>('INicoJKCommentServerManager');
                nicoJKManager.disconnectClient(socket, socket.data.nicoliveRoomData);
                socket.data.nicoliveRoomData = null;
            });
        });
    }

    /**
     * client へ状態変更通知
     */
    public notifyClient(): void {
        if (this.callTimer === null) {
            this.callTimer = setTimeout(() => {
                this.callTimer = null;

                if (this.ios.length === 0) {
                    throw new Error('must call SocketIoManageModel initialize');
                }

                for (const io of this.ios) {
                    io.sockets.emit('updateStatus');
                }
            }, 200);
        }
    }

    /**
     * エンコードの進捗情報更新を通知
     */
    public notifyUpdateEncodeProgress(): void {
        if (this.encodeProgressCallTimer === null) {
            this.encodeProgressCallTimer = setTimeout(() => {
                this.encodeProgressCallTimer = null;

                if (this.ios.length === 0) {
                    throw new Error('must call SocketIoManageModel initialize');
                }

                for (const io of this.ios) {
                    io.sockets.emit('updateEncode');
                }
            }, 200);
        }
    }
}
