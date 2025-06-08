import { injectable } from 'inversify';
import INicoliveCommentFetcherFactory from './INicoliveCommentFetcherFactory';
import INicoliveCommentFetcher from './INicoliveCommentFetcher';
import NicoliveCommentFetcher from './NicoliveCommentFetcher';
import NicoliveMessageClient from './NicoliveMessageClient';

@injectable()
export default class NicoliveCommentFetcherFactory implements INicoliveCommentFetcherFactory {
    constructor(
    ) {
    }
    create(page_url: string): INicoliveCommentFetcher {
        const msg_client = new NicoliveMessageClient()
        return new NicoliveCommentFetcher(msg_client,page_url);
    }

    
}
