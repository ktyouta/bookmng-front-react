import { useState } from "react";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { toast } from "react-toastify";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { UpdateBookshelfReviewResponseType } from "../Type/UpdateBookshelfReviewResponseType";
import type { UpdateBookshelfReviewRequestType } from "../Type/UpdateBookshelfReviewRequestType";
import ENV from "../../env.json";
import { BookshelfBookIdContext, ReadStatusListContext } from "../Component/Bookshelf";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { useCreateYearList } from "../../Common/Hook/useCreateYearList";


type propsType = {
    initStatus: BookshelfBookDetailMergedType,
    cancel: () => void,
    setInitStatus: React.Dispatch<React.SetStateAction<BookshelfBookDetailMergedType | undefined>>
}

export function useBookshelfStatusEdit(props: propsType) {

    // レビュー入力値
    const [status, setStatus] = useState(props.initStatus);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // 読書状況一覧
    const readStatusList = ReadStatusListContext.useCtx();

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
                //props.setStatus(data);
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

        // const body: UpdateBookshelfReviewRequestType = {
        //     status
        // };

        // // 更新リクエスト呼び出し
        // putMutation.mutate(body);
    }

    /**
     * お気に入り度アイコンクリックイベント
     * @param favoriteLevel 
     */
    function clickFavoriteLevelIcon(selectFavoriteLevel: number) {

        const newFavoriteLevel = status.favoriteLevel === 1 && selectFavoriteLevel === 1 ? 0 : selectFavoriteLevel;

        setStatus((e) => {

            return {
                ...e,
                favoriteLevel: newFavoriteLevel
            }
        });
    }

    return {
        status,
        setStatus,
        updateReview,
        yearCoomboList,
        readStatusList,
        clickFavoriteLevelIcon,
    }
}