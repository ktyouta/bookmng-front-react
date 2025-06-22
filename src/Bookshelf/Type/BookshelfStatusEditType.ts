import type { GoogleBooksDetailResponseType } from "../../Home/Type/GoogleBooksDetailResponseType";

// 書籍ステータス(編集)
export type BookshelfStatusEditType = {
    readStatus: string,
    startDate: {
        year: string,
        month: string,
        day: string,
    },
    endDate: {
        year: string,
        month: string,
        day: string,
    },
    favoriteLevel: number,
    purchaseDate: {
        year: string,
        month: string,
        day: string,
    },
};