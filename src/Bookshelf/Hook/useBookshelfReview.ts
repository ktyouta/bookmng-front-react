import { useState } from "react";
import { REVIEW_EDIT_MODE } from "../Const/BookshelfConst";

export function useBookshelfReview() {

    // 編集モード
    const [editMode, setEditMode] = useState(REVIEW_EDIT_MODE.VIEW);

    // 編集モード切替
    function changeEdit() {
        setEditMode(REVIEW_EDIT_MODE.EIDT);
    }

    return {
        editMode,
        changeEdit,
    };
}