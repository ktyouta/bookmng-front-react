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
        label: `感想`,
        value: `2`,
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
    REVIEW: `2`,
    TAG: `6`,
}

// 感想画面編集モード
export const REVIEW_EDIT_MODE = {
    VIEW: `0`,
    EDIT: `1`,
}