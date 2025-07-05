import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { toast } from "react-toastify";
import useSwitch from "../../Common/Hook/useSwitch";
import { BookshelfBookIdContext } from "../Component/Bookshelf";
import type { BookshelfMemoType } from "../Type/BookshelfMemoType";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { bookshelfMemoListAtom } from "../Atom/BookshelfAtom";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { useBookshelfMemoUpdEndpoint } from "./useBookshelfMemoUpdEndpoint";

type propsType = {
    memoSeq: number,
}

export function useBookshelfMemoContent(props: propsType) {

    // メモ情報
    const setVideoListItemAtom = useSetAtom(bookshelfMemoListAtom);
    // メモ編集エリアの切り替えフラグ
    const { flag: isOpenEdit, on: openEdit, off: closeEdit } = useSwitch();
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();


    /**
     * メモ削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useBookshelfMemoUpdEndpoint({
            bookId,
            memoSeq: props.memoSeq
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<BookshelfMemoType>) => {
            setVideoListItemAtom((e) => {
                if (e) {
                    e = e.filter((e1) => {
                        return e1.seq !== res.data.seq;
                    });
                }
                return e;
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            closeModal();
            toast.error(`メモの削除に失敗しました。`);
        },
    });


    /**
     * メモを削除する
     */
    function deleteMemo() {

        if (!bookId) {
            toast.error(`メモを削除できません。`);
            return;
        }

        // 削除確認用モーダルを展開
        openModal();
    }

    /**
     * メモ削除実行
     */
    function executeDelete() {

        // リクエスト送信
        postMutation.mutate();
    }


    return {
        deleteMemo,
        isOpenEdit,
        openEdit,
        closeEdit,
        isOpenModal,
        closeModal,
        executeDelete,
    }
}