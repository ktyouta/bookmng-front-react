import type { BookshelfBookListMergedType } from "./BookshelfBookListMergedType";

// お気に入り書籍リストapiのレスポンス
export type BookshelfBookListResponseType = {
    status: number,
    message: string,
    data: BookshelfBookListMergedType[],
}