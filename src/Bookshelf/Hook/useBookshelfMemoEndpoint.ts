import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useBookshelfMemoEndpoint(bookId: string) {

    const endpoint = bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_MEMO}`.replace(`:bookId`, bookId) : ``;

    return endpoint;
}