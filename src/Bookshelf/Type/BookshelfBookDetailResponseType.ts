import type { BookshelfBookDetailMergedType } from "./BookshelfBookDetailMergedType";
import type { BookshelfBookListMergedType } from "./BookshelfBookListMergedType";

// 本棚情報詳細apiのレスポンス
export type BookshelfBookDetailResponseType = {
    status: number,
    message: string,
    data: BookshelfBookDetailMergedType,
}