import type { comboType } from "../../Common/Component/ComboComponent";
import ENV from "../../env.json";

// 書籍種別リスト
export const book_TYPE_LIST: comboType[] = [
    {
        label: `すべて`,
        value: `all`,
    },
    {
        label: `ライブ`,
        value: `live`,
    }
];

// メニュー番号
export const MENU_NO = {
    INFO: `1`,
    COMMENT: `2`,
}

// 書籍詳細画面メニューリスト
export const BOOK_DETIAL_MENU_LIST: comboType[] = [
    {
        label: `書籍情報`,
        value: `1`,
    },
    {
        label: `公開コメント`,
        value: `2`,
    }
];