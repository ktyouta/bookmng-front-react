import { useState } from "react";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { toast } from "react-toastify";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { UpdateBookshelfReviewResponseType } from "../Type/UpdateBookshelfReviewResponseType";
import type { UpdateBookshelfReviewRequestType } from "../Type/UpdateBookshelfReviewRequestType";
import ENV from "../../env.json";
import { BookshelfBookIdContext } from "../Component/Bookshelf";


type propsType = {
    initReview: string,
    cancel: () => void,
    setInitReview: React.Dispatch<React.SetStateAction<string>>,
}

export function useBookshelfReviewEdit(props: propsType) {

    // レビュー入力値
    const [review, setReview] = useState(props.initReview);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();

    /**
     * レビュー更新リクエスト
     */
    const putMutation = useMutationWrapper({
        url: bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_REVIEW}/${bookId}` : ``,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<string>) => {

            const message = res.message;
            const data = res.data;

            if (message) {
                toast.success(message);
            }

            if (data) {
                props.setInitReview(data);
            }

            props.cancel();
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
    function updateReview() {

        const body: UpdateBookshelfReviewRequestType = {
            review
        };

        // 更新リクエスト呼び出し
        putMutation.mutate(body);
    }

    return {
        review,
        setReview,
        updateReview,
    }
}