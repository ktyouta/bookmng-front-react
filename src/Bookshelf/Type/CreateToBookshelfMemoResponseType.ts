import type { BookshelfMemoType } from "./BookshelfMemoType";

// 本棚メモ登録レスポンス
export type CreateToBookshelfMemoResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: BookshelfMemoType,
}