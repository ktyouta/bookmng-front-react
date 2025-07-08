import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useBookshelfTagEndpoint(bookId: string) {

    const endpoint = bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_TAG}`.replace(`:bookId`, bookId) : ``;

    return endpoint;
}