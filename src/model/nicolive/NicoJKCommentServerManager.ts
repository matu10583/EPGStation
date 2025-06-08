import { inject, injectable } from "inversify";
import INicoJKCommentServerManager from "./INicoJKCommentServerManager";
import ISocketIOManageModel from "../service/socketio/ISocketIOManageModel";
import INicoJKCommentServerModel from "./INicoJKCommentServerModel";

@injectable()
export default class NicoJKCommentServerManager implements INicoJKCommentServerManager{
    private socketIO: ISocketIOManageModel;
    private nicoJKCommentServer: INicoJKCommentServerModel;
    // private log: ILogger;

    constructor(
        @inject('INicoJKCommentServerModel') nicoJKCommentServer: INicoJKCommentServerModel,
        @inject('ISocketIOManageModel') socketIO: ISocketIOManageModel
    ){
        this.socketIO = socketIO;
        this.nicoJKCommentServer = nicoJKCommentServer;
        this.registerServerToSocket();
    }


    private registerServerToSocket(){
        this.socketIO.onJoinNicoLiveComment(
            async (data)=>{
                await this.nicoJKCommentServer.addConnection(data.channelId);
            }
        )

        this.socketIO.onLeaveNicoLiveComment(
            (data)=>{
                this.nicoJKCommentServer.decreaseConnection(data.channelId);
            }
        )
        
    }
}