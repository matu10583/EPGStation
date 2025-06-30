import * as apid from '../../../../../api';

export default interface INicoJKApiModel {
    getComments(recordedId: apid.RecordedId, isHalfWidth: boolean): Promise<apid.NicoJKComments | null>;
}
