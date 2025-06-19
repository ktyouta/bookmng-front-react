import type { BookListItemType } from "./BookListItemType";

// 書籍リストapiレスポンスの書籍情報本体の型
export type BookListDataType = {
    readonly kind: string,
    readonly totalItems: number,
    readonly items: BookListItemType[]
}