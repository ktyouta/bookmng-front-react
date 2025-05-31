import { BookshelfBookListMergedType } from "./BookshelfBookListMergedType";

// お気に入り書籍リストapiのレスポンス
export type BookshelfBookListResponseType = {
    data: BookshelfBookListMergedType[],
}