import type { GoogleBooksDetailResponseType } from "../../Home/Type/GoogleBooksDetailResponseType";

// お気に入り書籍情報と外部APIの書籍情報をマージした型
export type BookshelfBookDetailMergedType = GoogleBooksDetailResponseType & {
    bookId: string,
    review: string,
};