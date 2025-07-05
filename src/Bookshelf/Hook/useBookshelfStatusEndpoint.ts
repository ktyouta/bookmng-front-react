import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useBookshelfStatusEndpoint(bookId: string) {

    const endpoint = bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_STATUS}`.replace(`:bookId`, bookId) : ``;

    return endpoint;
}