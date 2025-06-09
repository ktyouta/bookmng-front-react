import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class BookDetailApiUrlModel {

    // 書籍詳細取得エンドポイント
    private static readonly book_INFO_PATH = `${BOOK_MNG_PATH}${ENV.BOOK}`;
    // 書籍詳細取得パス
    private readonly _bookMngApiPath: string;

    constructor(videId: string,) {

        this._bookMngApiPath = `${BookDetailApiUrlModel.book_INFO_PATH}/${videId}`;
    }

    get bookMngApiPath() {
        return this._bookMngApiPath;
    }
}