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
    },
    {
        label: `ステータス`,
        value: `4`,
    },
    {
        label: `メモ`,
        value: `5`,
    },
    {
        label: `タグ`,
        value: `6`,
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
    STATUS: `4`,
    MEMO: `5`,
    TAG: `6`,
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

// ステータス画面編集モード
export const STATUS_EDIT_MODE = {
    VIEW: `0`,
    EDIT: `1`,
}

// お気に入り度設定値
export const FAVORITE_LEVEL_SETTING_LIST = 5;

// タグ画面編集モード
export const TAG_EDIT_MODE = {
    VIEW: `1`,
    EDIT: `2`,
}