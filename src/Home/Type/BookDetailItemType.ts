import type { GoogleBooksDetailResponseType } from "./GoogleBooksDetailResponseType";

// 書籍詳細情報の型
export type BookDetailItemType = GoogleBooksDetailResponseType & {
    favoriteFlg: string,
}