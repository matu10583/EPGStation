import * as http from 'http';
import { inject, injectable } from 'inversify';
import * as SocketIO from 'socket.io';
import urljoin from 'url-join';
import IConfigFile from '../../IConfigFile';
import IConfiguration from '../../IConfiguration';
import ILogger from '../../ILogger';
import ILoggerModel from '../../ILoggerModel';
import ISocketIOManageModel from './ISocketIOManageModel';
import {NicoliveRoomData} from './ISocketIOManageModel';
import {NicoliveCommentData} from './ISocketIOManageModel';
// import { SocketAddress } from 'net';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

interface SocketData{
    nicoliveRoomData?: NicoliveRoomData;
}


@injectable()
export default class SocketIOManageModel implements ISocketIOManageModel {
    private log: ILogger;
    private config: IConfigFile;
    private ios: SocketIO.Server[] = [];
    private callTimer: NodeJS.Timer | null = null;
    private encodeProgressCallTimer: NodeJS.Timer | null = null;
    private nicoliveJoinCallbacks: Set<(data: NicoliveRoomData)=>void> = new Set();
    private nicoliveLeaveCallbacks: Set<(data: NicoliveRoomData)=>void> = new Set();

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
                new SocketIO.Server<DefaultEventsMap,DefaultEventsMap,DefaultEventsMap, SocketData>(s, {
                    path:
                        typeof this.config.subDirectory === 'undefined'
                            ? '/socket.io'
                            : urljoin(this.config.subDirectory, '/socket.io'),
                    cors: {
                        origin: '*',
                    },
                }),
            );
            this.registerCallback(this.ios[this.ios.length-1]);
        }

        this.log.system.info('SocketIO Server has started.');
    }

    private registerCallback(io: SocketIO.Server){
        io.on('connection', (socket)=>{
            socket.on('joinNicolive', (roomData: NicoliveRoomData)=>{
                socket.join(this.createChRoomName(roomData.channelId));
                //参加時コールバック
                this.runNicoliveJoinCallbacks(roomData);
                socket.data.nicoliveRoomData = roomData;
            });

            socket.on('leaveNicolive', ()=>{
                socket.leave(this.createChRoomName(socket.data.nicoliveRoomData));
                //退出時コールバック
                this.runNicoliveLeaveCallbacks(socket.data.nicoliveRoomData)
                socket.data.nicoliveRoomData = null;
            });
            socket.on('disconnecting', ()=>{
                //退出時コールバック
                for(const id of socket.rooms){
                    if(this.checkChRoomName(id)) continue;
                    this.runNicoliveLeaveCallbacks(socket.data.nicoliveRoomData);
                    socket.data.nicoliveRoomData = null;
                }
            });
        });
    }
    private runNicoliveJoinCallbacks(data: NicoliveRoomData){
        for(const c of this.nicoliveJoinCallbacks){
            c(data);
        }
    }
    private runNicoliveLeaveCallbacks(data: NicoliveRoomData){
        for(const c of this.nicoliveLeaveCallbacks){
            c(data);
        }
    }

    private createChRoomName(channelId: string):string{
        return "ch-"+channelId;
    }
    private checkChRoomName(name: string): boolean{
        return name.startsWith('ch-');
    }

    //コールバック登録関連
    public onJoinNicoLiveComment(callback: (data: NicoliveRoomData) => void): void {
        this.nicoliveJoinCallbacks.add(callback);
    }

    public offJoinNicoLiveComment(callback: (data: NicoliveRoomData) => void): void {
        this.nicoliveJoinCallbacks.delete(callback);
    }
    public onLeaveNicoLiveComment(callback: (data: NicoliveRoomData) => void): void {
        this.nicoliveLeaveCallbacks.add(callback);
    }

    public offLeaveNicoLiveComment(callback: (data: NicoliveRoomData) => void): void {
        this.nicoliveLeaveCallbacks.delete(callback);
    }

        /**
     * client へコメント通知
     * @param: channelId: チャンネル番号
     * @param: data: コメントデータ
     */
    public notifyNicoliveComment(channelId: string,data: NicoliveCommentData): void{
        for (const io of this.ios) {
            io.to(this.createChRoomName(channelId))
            .emit('reciveNicolive', data);
        }
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
