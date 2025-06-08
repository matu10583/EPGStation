

export default interface INicoliveCommentFetcher{
    connect(page_id: string): Promise<boolean>;
    disconnect():void;
}