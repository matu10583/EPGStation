import { inject, injectable } from 'inversify';
import INicoJKCommentServerModel from './INicoJKCommentServerModel';
import ILoggerModel from '../ILoggerModel';
import ISocketIOManageModel from '../service/socketio/ISocketIOManageModel';
import ILogger from '../ILogger';
import INicoliveCommentFetcher from '../../lib/nicolive/INicoliveCommentFetcher';
import IConfiguration from '../IConfiguration';
import IConfigFile from '../IConfigFile';

@injectable()
export default class NicoJKCommentServerModel implements INicoJKCommentServerModel {
    private socketIO: ISocketIOManageModel;
    private log: ILogger;
    private comment_fetcher: INicoliveCommentFetcher;
    private config: IConfigFile;

    constructor(
        @inject('ILoggerModel') logger: ILoggerModel,
        @inject('ISocketIOManageModel') socketIO: ISocketIOManageModel,
        @inject('INicoliveCommentFetcher') comment_fetcher: INicoliveCommentFetcher,
        @inject('IConfiguration') configuration: IConfiguration,
    ) {
        this.log = logger.getLogger();
        this.socketIO = socketIO;
        this.comment_fetcher = comment_fetcher;
        this.config = configuration.getConfig();
    }

    private registerSocketCallback(){
        this.socketIO.onJoinNicoLiveComment(
            (data)=>{
                const url = this.convertChannelToURL(data.channelId);
                if(url == undefined){
                    this.log.system.error("cannot find nicojk url: ", data.channelId);
                    return;
                }
                //接続インスタンス
            }
        )
    }

    private convertChannelToURL(chId: string): string|undefined{
        return this.config.nicoLive?.jk_url.find(item=>item.channel===chId)?.url;
    }

    
}
