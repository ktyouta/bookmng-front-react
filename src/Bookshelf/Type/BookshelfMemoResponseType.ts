import type { BookshelfMemoType } from "./BookshelfMemoType";

// 本棚メモ取得レスポンス
export type BookshelfMemoResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: BookshelfMemoType[],
}