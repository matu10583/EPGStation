import { NicoliveCommentData } from "../service/socketio/ISocketIOManageModel";

export default interface INicoJKCommentServerModel {
    addConnection(channelId: string):Promise<number>;
    onRecieveComment(channelId: string, callback: ((msg:NicoliveCommentData)=>any)):void;
    offRecieveComment(channelId: string, callback: ((msg:NicoliveCommentData)=>any)):void;
    decreaseConnection(channelId: string):number;
    getConnectionRefCount(channelId: string): number;
}