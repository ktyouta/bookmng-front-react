import { useState } from "react";
import { REVIEW_EDIT_MODE } from "../Const/BookshelfConst";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";


type propsType = {
    bookDetail: BookshelfBookDetailMergedType,
}

export function useBookshelfReview(props: propsType) {

    // 編集モード
    const [editMode, setEditMode] = useState(REVIEW_EDIT_MODE.VIEW);
    // 要約(初期値)
    const [initReview, setInitReview] = useState(props.bookDetail.review);

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
        initReview,
        setInitReview,
    };
}