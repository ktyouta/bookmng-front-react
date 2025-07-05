import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useBookshelfSummaryEndpoint(bookId: string) {

    const endpoint = bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_SUMMARY}`.replace(`:bookId`, bookId) : ``;

    return endpoint;
}