import type { BookshelfSortType } from "./BookshelfSortType";

export type BookshelfSortListResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: BookshelfSortType[],
}