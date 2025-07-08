import type { BookshelfTagType } from "./BookshelfTagType";

export type BookshelfTagResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: BookshelfTagType[],
}