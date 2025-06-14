import { useState } from "react";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { toast } from "react-toastify";
import type { UpdateBookshelfSummaryResponseType } from "../Type/UpdateBookshelfSummaryResponseType";
import type { UpdateBookshelfSummaryRequestType } from "../Type/UpdateBookshelfSummaryRequestType";
import { BookshelfBookIdContext } from "../Component/Bookshelf";


type propsType = {
    initSummary: string,
}

export function useBookshelfSummaryEdit(props: propsType) {

    // 要約入力値
    const [summary, setSummary] = useState(props.initSummary);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();


    /**
     * 要約更新リクエスト
     */
    const putMutation = useMutationWrapper({
        url: bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_SUMMARY}/${bookId}` : ``,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<UpdateBookshelfSummaryResponseType>) => {

            const message = res.message;
            if (message) {
                toast.success(message);
            }
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * 要約更新
     */
    function updateSummary() {

        const body: UpdateBookshelfSummaryRequestType = {
            summary
        };

        // 更新リクエスト呼び出し
        putMutation.mutate(body);
    }

    return {
        summary,
        setSummary,
        updateSummary,
    }
}