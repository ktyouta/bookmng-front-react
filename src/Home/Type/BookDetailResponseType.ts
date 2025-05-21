import type { BookDetailItemType } from "./BookDetailItemType";

// Google Books API(書籍詳細)のレスポンス
export type BookDetailResponseType = {
    data: {
        readonly kind: string;
        readonly etag: string;
        readonly items: BookDetailItemType[];
    }
}