import IStorageBaseModel from '../IStorageBaseModel';

export interface IVideoPlayerSettingValue {
    isShowSubtitle: boolean;
    isShowComment: boolean;
}

export type IVideoPlayerSettingModel = IStorageBaseModel<IVideoPlayerSettingValue>;
