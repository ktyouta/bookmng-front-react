import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class SearchKeywordCommentUrlModel {

    // 書籍一覧取得エンドポイント
    private static readonly BOOK_INFO_PATH = `${BOOK_MNG_PATH}${ENV.SEARCH_COMMENT_BY_KEYWORD}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // クエリパラメータのキー(書籍ID)
    private static readonly QUERY_KEY_BOOKID = `bookId`;
    // 書籍一覧取得パス
    private readonly _path: string;

    constructor(keyword: string, bookTypeSelectValue: string) {

        const queryParam = `${SearchKeywordCommentUrlModel.QUERY_KEY_KEYWORD}=${keyword}&${SearchKeywordCommentUrlModel.QUERY_KEY_BOOKID}=${bookTypeSelectValue}`;
        this._path = `${SearchKeywordCommentUrlModel.BOOK_INFO_PATH}?${queryParam}`;
    }

    get path() {
        return this._path;
    }
}