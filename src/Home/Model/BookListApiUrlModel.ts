import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";


type porpsType = {
    keyword: string,
    startIndex: number,
}

export class BookListApiUrlModel {

    // 書籍一覧取得エンドポイント
    private static readonly book_INFO_PATH = `${BOOK_MNG_PATH}${ENV.BOOK}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // クエリパラメータのキー(書籍取得開始位置)
    private static readonly QUERY_KEY_START_INDEX = `startIndex`;
    // 書籍一覧取得URL
    private readonly _url: string;
    // クエリパラメータ
    private readonly _query: string;

    private constructor(queryParam: string) {

        this._query = queryParam;
        this._url = `${BookListApiUrlModel.book_INFO_PATH}${queryParam}`;
    }

    /**
     * APIの呼び出しURLを作成
     * @param props 
     * @returns 
     */
    static create(props: porpsType) {

        let queryParam = `?${BookListApiUrlModel.QUERY_KEY_KEYWORD}=${props.keyword}`;

        queryParam += `&${BookListApiUrlModel.QUERY_KEY_START_INDEX}=${props.startIndex}`;

        return new BookListApiUrlModel(queryParam);
    }

    /**
     * APIの呼び出しURLを設定
     * @param query 
     */
    static reConstruct(query: string) {

        if (!query) {
            throw Error(`書籍一覧取得URLのクエリパラメータが存在しません。`);
        }

        if (query.length === 0) {
            throw Error(`書籍一覧取得URLのクエリパラメータが存在しません。`);
        }

        if (query.charAt(0) !== `?`) {
            throw Error(`書籍一覧取得URLのクエリパラメータの形式が不正です。`);
        }

        return new BookListApiUrlModel(query);
    }

    get url() {
        return this._url;
    }

    get query() {
        return this._query;
    }
}