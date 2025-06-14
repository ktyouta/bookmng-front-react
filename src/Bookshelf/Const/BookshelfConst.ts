import type { comboType } from "../../Common/Component/ComboComponent";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";



// 本棚詳細画面メニューリスト
export const BOOKSHELF_DETAIL_MENU_LIST: comboType[] = [
    {
        label: `書籍情報`,
        value: `1`,
    },
    {
        label: `要約`,
        value: `2`,
    },
    {
        label: `レビュー`,
        value: `3`,
    }
];

// コメントお気に入りステータス
export const COMMENT_FAVORITE_STATUS = {
    NONE: "0",
    FAVORITE: "1",
}

// メニュー番号
export const MENU_NO = {
    INFO: `1`,
    SUMMARY: `2`,
    REVIEW: `3`,
}

// レビュー画面編集モード
export const REVIEW_EDIT_MODE = {
    VIEW: `0`,
    EDIT: `1`,
}

// 要約画面編集モード
export const SUMMARY_EDIT_MODE = {
    VIEW: `0`,
    EDIT: `1`,
}