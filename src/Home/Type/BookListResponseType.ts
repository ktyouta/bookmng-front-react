import type { BookListDataType } from "./BookListDataType";
import type { GoogleBooksAPIsModelType } from "./GoogleBooksAPIsModelType";

// 書籍リストapiのレスポンス
export type BookListResponseType = {
    status: number,
    message: string,
    data: BookListDataType,
}