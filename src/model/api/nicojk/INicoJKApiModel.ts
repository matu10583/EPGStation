import * as apid from '../../../../api';
export default interface INicoJKApiModel {
    getRecordedComments(recordedId: apid.RecordedId, isHalfWidth: boolean): Promise<apid.NicoJKComments | null>;
}
