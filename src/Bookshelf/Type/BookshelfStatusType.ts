import type { GoogleBooksDetailResponseType } from "../../Home/Type/GoogleBooksDetailResponseType";

// 書籍ステータス
export type BookshelfStatusType = {
    readStatus: string,
    startDate: string,
    endDate: string,
    favoriteLevel: number,
    purchaseDate: string;
};