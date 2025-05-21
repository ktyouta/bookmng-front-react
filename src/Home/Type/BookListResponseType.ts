import type { GoogleBooksAPIsModelType } from "./GoogleBooksAPIsModelType";

// 書籍リストapiのレスポンス
export type BookListResponseType = {
    status: number;
    message: string,
    data: GoogleBooksAPIsModelType;
}