import INicoliveCommentFetcher from "./INicoliveCommentFetcher"

export default interface INicoliveCommentFetcherFactory{
    create(page_url: string):INicoliveCommentFetcher;
}