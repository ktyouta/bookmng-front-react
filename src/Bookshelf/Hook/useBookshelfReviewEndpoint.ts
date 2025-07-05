import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useBookshelfReviewEndpoint(bookId: string) {

    const endpoint = bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_REVIEW}`.replace(`:bookId`, bookId) : ``;

    return endpoint;
}