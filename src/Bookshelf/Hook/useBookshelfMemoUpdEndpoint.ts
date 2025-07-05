import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

type propsType = {
    bookId: string,
    memoSeq: number,
}

export function useBookshelfMemoUpdEndpoint(props: propsType) {

    const endpoint = props.bookId && props.memoSeq ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_MEMO_ID.replace(`:bookId`, props.bookId).replace(`:memoId`, `${props.memoSeq}`)}` : ``;

    return endpoint;
}