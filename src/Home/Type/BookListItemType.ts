import type { GoogleBooksAPIsModelItemsType } from "./GoogleBooksAPIsModelItemsType";

export type BookListItemType = GoogleBooksAPIsModelItemsType & {
    favoriteFlg: string,
}