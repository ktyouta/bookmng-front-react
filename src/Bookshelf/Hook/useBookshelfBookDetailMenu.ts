import { useState } from "react";
import { BOOKSHELF_DETAIL_MENU_LIST, MENU_NO } from "../Const/BookshelfConst";

export function useBookshelfBookDetailMenu() {

    // 選択中のメニュー
    const [selectedMenuNo, setSelectedMenuNo] = useState(MENU_NO.INFO);

    return {
        selectedMenuNo,
        setSelectedMenuNo,
    };
}