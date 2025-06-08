
import { NicoliveCommentData } from "../../model/service/socketio/ISocketIOManageModel";

export default interface INicoliveCommentFetcher{
    addConnection(): Promise<number>;
    decreaseConnection():number;
    onRecieveComment(callback:((msg: NicoliveCommentData)=>any)):void;
    offRecieveComment(callback:((msg: NicoliveCommentData)=>any)):void;
    forceDisconnect():void;
    getConnectionRefCount():number;
}