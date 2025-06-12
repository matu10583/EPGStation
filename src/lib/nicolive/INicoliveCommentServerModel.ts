// import { NicoliveCommentData } from '../../model/service/socketio/ISocketIOManageModel';
import * as SocketIO from 'socket.io';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';

export interface NicoliveCommentServerConfig {
    url: string;
}
export type NicoliveCommentServerModelFactory = (data: NicoliveCommentServerConfig) => INicoliveCommentServerModel;

export default interface INicoliveCommentServerModel {
    init(fetcher: INicoliveCommentFetcher): void;
    connectClient(client: SocketIO.Socket): Promise<boolean>;
    disconnectClient(client: SocketIO.Socket): void;
    // onRecieveComment(callback: (msg: NicoliveCommentData) => any): void;
    // offRecieveComment(callback: (msg: NicoliveCommentData) => any): void;
}
