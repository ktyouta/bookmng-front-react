import { useEffect, useState } from "react";
import { REVIEW_EDIT_MODE } from "../Const/BookshelfConst";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";


type propsType = {
    bookDetail: BookshelfBookDetailMergedType,
}

export function useBookshelfStatus(props: propsType) {

    // 編集モード
    const [editMode, setEditMode] = useState(REVIEW_EDIT_MODE.VIEW);
    // 要約(初期値)
    const [initReview, setInitReview] = useState(props.bookDetail.review);
    // ステータス(初期値)
    const [initStatus, setInitStatus] = useState<BookshelfBookDetailMergedType>();


    useEffect(() => {
        setInitStatus(props.bookDetail);
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