import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class BookshelfBookDetailApiUrlModel {

    // 書籍詳細取得エンドポイント
    private static readonly BOOK_INFO_PATH = `${BOOK_MNG_PATH}${ENV.FAVORITE_BOOK}`;
    // 書籍詳細取得パス
    private readonly _bookMngApiPath: string;

    constructor(videId: string,) {

        this._bookMngApiPath = `${BookshelfBookDetailApiUrlModel.BOOK_INFO_PATH}/${videId}`;
    }

    get bookMngApiPath() {
        return this._bookMngApiPath;
    }
}