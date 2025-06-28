import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { toast } from "react-toastify";
import { bookshelfMemoListAtom } from "../Atom/BookshelfAtom";
import { BookshelfBookIdContext } from "../Component/Bookshelf";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { UpdateToBookshelfMemoReqestType } from "../Type/UpdateToBookshelfMemoReqestType";
import type { BookshelfMemoType } from "../Type/BookshelfMemoType";


type propsType = {
    inputMemo: string,
    closeEdit: () => void,
}

export function useBookshelfMemoUpdateInput(props: propsType) {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(props.inputMemo);
    // メモ情報
    const setListItemAtom = useSetAtom(bookshelfMemoListAtom);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();


    /**
     * お気に入り動画メモ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.BOOKSHELF_MEMO}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<BookshelfMemoType>) => {
            setListItemAtom((e) => {
                if (e) {
                    const resMemo = res.data;
                    const userId = resMemo.userId;
                    const seq = resMemo.seq;
                    const memo = resMemo.memo;

                    // 対象のメモを更新
                    const updateMemo = e.find((e1) => {
                        return e1.userId === userId &&
                            e1.seq === seq;
                    });

                    if (updateMemo) {
                        updateMemo.memo = memo;
                        updateMemo.updateDate = resMemo.updateDate;
                    }
                }
                return e;
            });

            props.closeEdit();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`メモの更新に失敗しました。`);
        },
    });

    /**
     * メモを更新する
     * @param videoId 
     */
    function updateMemo(videoMemoSeq: number) {

        if (!inputMemo) {
            toast.warn(`メモが入力されていません。`);
            return;
        }

        if (!bookId) {
            toast.error(`メモを更新できません。`);
            return;
        }

        const body: UpdateToBookshelfMemoReqestType = {
            memo: inputMemo
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        inputMemo,
        setInputMemo,
        updateMemo,
    }
}