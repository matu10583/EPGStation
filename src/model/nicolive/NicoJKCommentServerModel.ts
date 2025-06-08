import { inject, injectable } from 'inversify';
import INicoJKCommentServerModel from './INicoJKCommentServerModel';
import ILoggerModel from '../ILoggerModel';
import ILogger from '../ILogger';
import INicoliveCommentFetcher from '../../lib/nicolive/INicoliveCommentFetcher';
import IConfiguration from '../IConfiguration';
import IConfigFile from '../IConfigFile';
import INicoliveCommentFetcherFactory from '../../lib/nicolive/INicoliveCommentFetcherFactory';
import ISocketIOManageModel, { NicoliveCommentData } from '../service/socketio/ISocketIOManageModel';

@injectable()
export default class NicoJKCommentServerModel implements INicoJKCommentServerModel {
    private log: ILogger;
    private comment_fetchers: Map<string, INicoliveCommentFetcher> = new Map();
    private config: IConfigFile;

    constructor(
        @inject('ILoggerModel') logger: ILoggerModel,
        @inject('IConfiguration') configuration: IConfiguration,
        @inject('INicoliveCommentFetcherFactory')cmt_factory: INicoliveCommentFetcherFactory,
        @inject('ISocketIOManageModel') socketIO: ISocketIOManageModel
    ) {
        this.log = logger.getLogger();
        this.config = configuration.getConfig();

        const nicolive = this.config.nicoLive;
        if(nicolive==null){
            return;
        }
        for(const setting of nicolive.jk_url){
            const fetcher = cmt_factory.create(setting.url);
            fetcher.onRecieveComment((msg)=>{
                socketIO.notifyNicoliveComment(setting.channel, msg);
            })
            this.comment_fetchers.set(setting.channel, fetcher);
        }
    }

    public getConnectionRefCount(channelId: string): number {
        const fetcher = this.getCommentFetcher(channelId);
        if(fetcher===null) return -1;
        return fetcher.getConnectionRefCount();
    }

    public async addConnection(channelId: string):Promise<number>{
        const fetcher = this.getCommentFetcher(channelId);
        if(fetcher===null) return -1;
        const result = await fetcher.addConnection();
        return result;
    }

    public onRecieveComment(channelId: string, callback: ((msg:NicoliveCommentData)=>any)){
        const fetcher = this.getCommentFetcher(channelId);
        if(fetcher===null) return;
        fetcher.onRecieveComment(callback);
    }
    public offRecieveComment(channelId: string, callback: ((msg:NicoliveCommentData)=>any)){
        const fetcher = this.getCommentFetcher(channelId);
        if(fetcher===null) return;
        fetcher.offRecieveComment(callback);
    }

    public decreaseConnection(channelId: string):number{
        const fetcher = this.getCommentFetcher(channelId);
        if(fetcher===null) return -1;
        return fetcher.decreaseConnection();
    }

    private getCommentFetcher(channelId: string): INicoliveCommentFetcher| null{
        const ret =  this.comment_fetchers.get(channelId);
        if(ret === undefined){
            this.log.system.error("do not exist url in settings. channelID: ", channelId);
            return null;
        }
        return ret;
    }


    
}
