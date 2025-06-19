import type { GoogleBooksAPIsModelItemsType } from "./GoogleBooksAPIsModelItemsType";

export type BookListItemType = GoogleBooksAPIsModelItemsType & {
    bookshelfFlg: string,
}