import * as http from 'http';

export interface NicoliveCommentData{
    content: string;
}
export interface NicoliveRoomData{
    channelId: string;
}

export default interface ISocketIOManageModel {
    initialize(servers: http.Server[]): void;
    notifyClient(): void;
    notifyUpdateEncodeProgress(): void;
    notifyNicoliveComment(channelId: string,data: NicoliveCommentData): void;
    onJoinNicoLiveComment(callback: (data: NicoliveRoomData) => void): void
    offJoinNicoLiveComment(callback: (data: NicoliveRoomData) => void): void

}
