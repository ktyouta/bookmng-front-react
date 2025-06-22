import { useEffect, useState } from "react";
import { REVIEW_EDIT_MODE } from "../Const/BookshelfConst";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import type { BookshelfStatusType } from "../Type/BookshelfStatusType";


type propsType = {
    bookDetail: BookshelfBookDetailMergedType,
}

export function useBookshelfStatus(props: propsType) {

    // 編集モード
    const [editMode, setEditMode] = useState(REVIEW_EDIT_MODE.VIEW);
    // ステータス(初期値)
    const [initStatus, setInitStatus] = useState<BookshelfStatusType>();

    /**
     * 初期値設定
     */
    useEffect(() => {
        setInitStatus({
            readStatus: props.bookDetail.readStatus,
            startDate: props.bookDetail.startDate,
            endDate: props.bookDetail.endDate,
            favoriteLevel: props.bookDetail.favoriteLevel,
            purchaseDate: props.bookDetail.purchaseDate,
        });
    }, [props.bookDetail]);


    /**
     * 編集モードに切替
     */
    function changeEdit() {
        setEditMode(REVIEW_EDIT_MODE.EDIT);
    }

    /**
     * 編集キャンセル
     */
    function cancel() {
        setEditMode(REVIEW_EDIT_MODE.VIEW);
    }

    return {
        editMode,
        changeEdit,
        cancel,
        initStatus,
        setInitStatus,
    };
}