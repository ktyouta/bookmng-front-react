import { useState } from "react";
import { TAG_EDIT_MODE } from "../Const/BookshelfConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useAtomValue, useSetAtom } from "jotai";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { BookshelfBookIdContext } from "../Component/Bookshelf";
import type { BookshelfTagResponseType } from "../Type/BookshelfTagResponseType";
import { bookshelfTagListAtom } from "../Atom/BookshelfAtom";
import { useBookshelfTagEndpoint } from "./useBookshelfTagEndpoint";


export function useBookshelfTag() {

    // 編集フラグ
    const [editMode, setEditMode] = useState(TAG_EDIT_MODE.VIEW);
    // 書籍ID
    const bookId = BookshelfBookIdContext.useCtx();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // タグリスト
    const setBookshelfTagList = useSetAtom(bookshelfTagListAtom);


    // タグリストを取得
    const { isLoading } = useQueryWrapper<BookshelfTagResponseType>(
        {
            url: useBookshelfTagEndpoint(bookId),
            afSuccessFn: (response: BookshelfTagResponseType) => {
                setBookshelfTagList(response.data ?? undefined);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`タグの取得に失敗しました`);
            }
        }
    );

    /**
     * 編集画面遷移
     */
    function changeEdit() {
        setEditMode(TAG_EDIT_MODE.EDIT);
    }

    /**
     * 閲覧画面遷移
     */
    function changeView() {
        setEditMode(TAG_EDIT_MODE.VIEW);
    }

    return {
        editMode,
        changeEdit,
        changeView,
        errMessage,
        isLoading,
    }

}