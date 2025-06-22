import { useEffect, useMemo, useState } from "react";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { BOOK_MNG_PATH, DAY_LIST, MONTH_LIST } from "../../Common/Const/CommonConst";
import { toast } from "react-toastify";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { UpdateBookshelfReviewResponseType } from "../Type/UpdateBookshelfReviewResponseType";
import type { UpdateBookshelfReviewRequestType } from "../Type/UpdateBookshelfReviewRequestType";
import ENV from "../../env.json";
import { BookshelfBookIdContext, ReadStatusListContext } from "../Component/Bookshelf";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { useCreateYearList } from "../../Common/Hook/useCreateYearList";
import type { UpdateBookshelfStatusRequestType } from "../Type/UpdateBookshelfStatusRequestType";
import type { BookshelfStatusType } from "../Type/BookshelfStatusType";
import type { BookshelfStatusEditType } from "../Type/BookshelfStatusEditType";


type propsType = {
    initStatus: BookshelfStatusType,
    cancel: () => void,
    setInitStatus: React.Dispatch<React.SetStateAction<BookshelfStatusType | undefined>>
}

export function useBookshelfStatusEdit(props: propsType) {

    // ステータス
    const [status, setStatus] = useState<BookshelfStatusEditType>();
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // 読書状況一覧
    const readStatusList = ReadStatusListContext.useCtx();


    /**
     * ステータス初期設定
     */
    useEffect(() => {

        const initStatus = props.initStatus;
        const startDateYear = initStatus.startDate && initStatus.startDate.length > 3 ? initStatus.startDate.slice(0, 4) : ``;
        const startDateMonth = initStatus.startDate && initStatus.startDate.length > 5 ? initStatus.startDate.slice(4, 6) : ``;
        const startDateDay = initStatus.startDate && initStatus.startDate.length > 7 ? initStatus.startDate.slice(6, 8) : ``;
        const endDateYear = initStatus.endDate && initStatus.endDate.length > 3 ? initStatus.endDate.slice(0, 4) : ``;
        const endDateMonth = initStatus.endDate && initStatus.endDate.length > 5 ? initStatus.endDate.slice(4, 6) : ``;
        const endDateDay = initStatus.endDate && initStatus.endDate.length > 7 ? initStatus.endDate.slice(6, 8) : ``;
        const purchaseDateYear = initStatus.purchaseDate && initStatus.purchaseDate.length > 3 ? initStatus.purchaseDate.slice(0, 4) : ``;
        const purchaseDateMonth = initStatus.purchaseDate && initStatus.purchaseDate.length > 5 ? initStatus.purchaseDate.slice(4, 6) : ``;
        const purchaseDateDay = initStatus.purchaseDate && initStatus.purchaseDate.length > 7 ? initStatus.purchaseDate.slice(6, 8) : ``;

        setStatus({
            readStatus: initStatus.readStatus,
            startDate: {
                year: startDateYear,
                month: startDateMonth,
                day: startDateDay,
            },
            endDate: {
                year: endDateYear,
                month: endDateMonth,
                day: endDateDay
            },
            favoriteLevel: initStatus.favoriteLevel,
            purchaseDate: {
                year: purchaseDateYear,
                month: purchaseDateMonth,
                day: purchaseDateDay,
            },
        });

    }, [props.initStatus]);

    // 年リスト
    const yearSelectList = useMemo(() => {

        return [
            {
                label: ``,
                value: ``
            },
            ...yearCoomboList
        ];

    }, [yearCoomboList]);

    // 月リスト
    const monthSelectList = useMemo(() => {

        return [
            {
                label: ``,
                value: ``
            },
            ...MONTH_LIST
        ];

    }, []);

    // 日リスト
    const daySelectList = useMemo(() => {

        return [
            {
                label: ``,
                value: ``
            },
            ...DAY_LIST
        ];

    }, []);

    /**
     * ステータス更新リクエスト
     */
    const putMutation = useMutationWrapper({
        url: bookId ? `${BOOK_MNG_PATH}${ENV.BOOKSHELF_STATUS}/${bookId}` : ``,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<BookshelfBookDetailMergedType>) => {

            const message = res.message;
            const data = res.data;

            if (message) {
                toast.success(message);
            }

            if (data) {
                props.setInitStatus(data);
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
     * ステータス更新
     */
    function updateReview() {

        if (!status) {
            return;
        }

        const purchaseDate = `${status.purchaseDate.year}${status.purchaseDate.month}${status.purchaseDate.day}`
        const startDate = `${status.startDate.year}${status.startDate.month}${status.startDate.day}`;
        const endDate = `${status.endDate.year}${status.endDate.month}${status.endDate.day}`;

        if (purchaseDate) {

            if (!status.purchaseDate.year) {
                toast.error(`購入日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }

            if (!status.purchaseDate.month) {
                toast.error(`購入日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }

            if (!status.purchaseDate.day) {
                toast.error(`購入日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }
        }

        if (startDate) {

            if (!status.startDate.year) {
                toast.error(`読書開始日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }

            if (!status.startDate.month) {
                toast.error(`読書開始日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }

            if (!status.startDate.day) {
                toast.error(`読書開始日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }
        }

        if (endDate) {

            if (!status.endDate.year) {
                toast.error(`読書終了日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }

            if (!status.endDate.month) {
                toast.error(`読書終了日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }

            if (!status.endDate.day) {
                toast.error(`読書終了日の年・月・日をすべて選択するか、すべて未選択にしてください`);
                return;
            }
        }

        const body: UpdateBookshelfStatusRequestType = {
            readStatus: status.readStatus,
            startDate: startDate,
            endDate: endDate,
            favoriteLevel: status.favoriteLevel,
            purchaseDate: purchaseDate,
        };

        //console.log(body);
        // 更新リクエスト呼び出し
        putMutation.mutate(body);
    }

    /**
     * お気に入り度アイコンクリックイベント
     * @param favoriteLevel 
     */
    function clickFavoriteLevelIcon(selectFavoriteLevel: number) {

        if (!status) {
            return;
        }

        const newFavoriteLevel = status.favoriteLevel === 1 && selectFavoriteLevel === 1 ? 0 : selectFavoriteLevel;

        setStatus((e) => {

            if (!e) {
                return e;
            }

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
        yearSelectList,
        monthSelectList,
        daySelectList,
    }
}