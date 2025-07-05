import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { toast } from "react-toastify";
import { bookshelfMemoListAtom } from "../Atom/BookshelfAtom";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { BookshelfMemoType } from "../Type/BookshelfMemoType";
import type { CreateToBookshelfMemoReqestType } from "../Type/CreateToBookshelfMemoReqestType";
import { BookshelfBookIdContext } from "../Component/Bookshelf";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { useBookshelfMemoEndpoint } from "./useBookshelfMemoEndpoint";


export function useBookshelfMemoCreateInput() {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(``);
    // メモ情報
    const setVideoListItemAtom = useSetAtom(bookshelfMemoListAtom);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();


    /**
     * 本棚メモ登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useBookshelfMemoEndpoint(bookId),
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<BookshelfMemoType>) => {
            setVideoListItemAtom((e) => {
                if (e) {
                    e = [...e, res.data];
                }
                setInputMemo(``);
                return e;
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`メモの登録に失敗しました。`);
        },
    });

    /**
     * メモを登録する
     */
    function addToMemo() {

        if (!inputMemo) {
            toast.warn(`メモが入力されていません。`);
            return;
        }

        if (!bookId) {
            toast.error(`メモを登録できません。`);
            return;
        }

        const body: CreateToBookshelfMemoReqestType = {
            memo: inputMemo
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        inputMemo,
        setInputMemo,
        addToMemo
    }
}