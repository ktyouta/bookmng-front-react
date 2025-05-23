import type { GoogleBooksDetailResponseType } from "./GoogleBooksDetailResponseType";

// 書籍詳細情報の型
export type BookDetailType = GoogleBooksDetailResponseType & {
    favoriteFlg: string,
}