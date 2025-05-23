import type { BookDetailType } from "./BookDetailType";
import type { GoogleBooksDetailResponseType } from "./GoogleBooksDetailResponseType";

// Google Books API(書籍詳細)のレスポンス
export type BookDetailResponseType = {
    status: number;
    message: string,
    data: BookDetailType
}