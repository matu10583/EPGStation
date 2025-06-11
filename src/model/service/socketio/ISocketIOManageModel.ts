import * as http from 'http';

export interface NicoliveRoomData {
    channelId: string;
    connected: boolean;
}

export default interface ISocketIOManageModel {
    initialize(servers: http.Server[]): void;
    notifyClient(): void;
    notifyUpdateEncodeProgress(): void;
}
