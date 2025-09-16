import { inject, injectable } from 'inversify';
import INicoJKApiModel from './INicoJKApiModel';
import { NicoJKComments, RecordedId } from '../../../../api';
import container from '../../ModelContainer';
import IRecordedApiModel from '../recorded/IRecordedApiModel';
import IConfiguration from '../../IConfiguration';
import IConfigFile from '../../IConfigFile';

@injectable()
export default class NicoJKApiModel implements INicoJKApiModel {
    config: IConfigFile;
    constructor(@inject('IConfiguration') configuration: IConfiguration) {
        this.config = configuration.getConfig();
    }

    convertChannelId(id: number): string | null {
        const result = this.config.nicoLive?.jk_url.find(e => e.channel == id.toString());
        if (result == null) {
            return null;
        }
        return result.id;
    }
    async getRecordedComments(recordedId: RecordedId, isHalfWidth: boolean): Promise<NicoJKComments | null> {
        try {
            if (this.config.nicoLive == null) return null;
            const recordedApiModel = container.get<IRecordedApiModel>('IRecordedApiModel');
            const recorded = await recordedApiModel.get(recordedId, isHalfWidth);
            if (recorded == null) {
                return null;
            }
            //コメント取得
            const channelId = this.convertChannelId(recorded.channelId);
            if (channelId == null) {
                return null;
            }
            const start = Math.floor(recorded.startAt * 0.001);
            const end = Math.floor(recorded.endAt * 0.001);
            const requrl = `${this.config.nicoLive.kakolog_url}/${channelId}?starttime=${start}&endtime=${end}&format=json`;
            const res = await fetch(requrl);
            if (!res.ok) {
                return null;
            }
            const res_json = await res.json();

            const comments: NicoJKComments = {
                comments: res_json['packet'].map((e: any) => {
                    return {
                        vpos: Math.floor(e.chat.date * 1000 + e.chat.date_usec * 0.001) - recorded.startAt,
                        content: e.chat.content,
                    };
                }),
            };
            comments.comments.sort((a, b) => a.vpos - b.vpos);
            return comments;
        } catch (e) {
            return null;
        }
    }
}
