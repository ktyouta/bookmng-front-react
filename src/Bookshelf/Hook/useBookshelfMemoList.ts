import { useAtom, useAtomValue } from "jotai";
import ENV from "../../env.json";
import { useState } from "react";
import { bookshelfMemoListAtom } from "../Atom/BookshelfAtom";
import { BookshelfBookIdContext } from "../Component/Bookshelf";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import type { BookshelfMemoResponseType } from "../Type/BookshelfMemoResponseType";


export function useBookshelfMemoList() {

    // メモ情報
    const [bookshelfMemoList, setListItemAtom] = useAtom(bookshelfMemoListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();


    // メモ情報を取得
    const { isLoading } = useQueryWrapper<BookshelfMemoResponseType>(
        {
            url: bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_MEMO.replace(`:bookId`, bookId)}` : ``,
            afSuccessFn: (response: BookshelfMemoResponseType) => {
                setListItemAtom(response.data);
            },
            afErrorFn: (res) => {
                setErrMessage(`メモの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        bookshelfMemoList,
        errMessage,
    }
}