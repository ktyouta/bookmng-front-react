import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class BookshelfBookDetailApiUrlModel {

    // 書籍詳細取得エンドポイント
    private static readonly BOOK_INFO_PATH = `${BOOK_MNG_PATH}${ENV.BOOKSHELF}`;
    // 書籍詳細取得パス
    private readonly _bookMngApiPath: string;

    constructor(bookId: string,) {

        this._bookMngApiPath = `${BookshelfBookDetailApiUrlModel.BOOK_INFO_PATH}/${bookId}`;
    }

    get bookMngApiPath() {
        return this._bookMngApiPath;
    }
}