import type { comboType } from "../../Common/Component/ComboComponent";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";



// お気に入り書籍詳細画面メニューリスト
export const BOOK_DETIAL_MENU_LIST: comboType[] = [
    {
        label: `書籍情報`,
        value: `1`,
    },
    {
        label: `メモ`,
        value: `2`,
    },
    {
        label: `キーワード検索(コメント)`,
        value: `3`,
    },
    {
        label: `公開コメント`,
        value: `4`,
    },
    {
        label: `書籍詳細設定`,
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