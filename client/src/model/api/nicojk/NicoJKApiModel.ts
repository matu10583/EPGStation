import { injectable, inject } from 'inversify';
import * as apid from '../../../../../api';
import INicoJKApiModel from './INicoJKApiModel';
import IRepositoryModel from '../IRepositoryModel';

@injectable()
export default class NicoJKApiModel implements INicoJKApiModel {
    private repository: IRepositoryModel;

    constructor(@inject('IRepositoryModel') repository: IRepositoryModel) {
        this.repository = repository;
    }

    async getComments(recordedId: apid.RecordedId, isHalfWidth: boolean): Promise<apid.NicoJKComments | null> {
        const result = await this.repository.get(`/nicojk/${recordedId.toString(10)}`, {
            params: {
                isHalfWidth: isHalfWidth,
            },
        });
        if (result.status != 200) {
            return null;
        }

        return result.data;
    }
}
