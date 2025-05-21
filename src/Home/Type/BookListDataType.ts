import type { BookListItemType } from "./BookListItemType";

// 書籍リストapiレスポンスの書籍情報本体の型
export type BookListDataType = {
    readonly kind: string;
    readonly etag: string;
    readonly nextPageToken?: string;
    readonly regionCode?: string;
    readonly pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    readonly items: BookListItemType[];
}