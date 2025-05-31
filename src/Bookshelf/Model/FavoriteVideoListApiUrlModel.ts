import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

type porpsType = {
    viewStatus?: string,
    bookCategory?: string,
    bookTag?: string,
    sortKey?: string,
    bookshelfLevel?: string,
}

export class BookshelfBookListApiUrlModel {

    // 書籍一覧取得エンドポイント
    private static readonly BOOK_INFO_PATH = `${BOOK_MNG_PATH}${ENV.BOOKSHELF}`;
    // クエリパラメータのキー(視聴状況)
    private static readonly QUERY_KEY_VIEW_STATUS = `viewstatus`;
    // クエリパラメータのキー(カテゴリ)
    private static readonly QUERY_KEY_CATEGORY = `bookcategory`;
    // クエリパラメータのキー(タグ)
    private static readonly QUERY_KEY_TAG = `booktag`;
    // クエリパラメータのキー(ソート)
    private static readonly QUERY_KEY_SORT = `sortkey`;
    // クエリパラメータのキー(お気に入り度)
    private static readonly QUERY_KEY_FAVORITE_LEVEL = `bookshelflevel`;
    // 書籍一覧取得URL
    private readonly _url: string;
    // クエリパラメータ
    private readonly _query: string;

    constructor(props: porpsType) {

        let queryParam = ``;

        if (props.viewStatus) {
            queryParam += `&${BookshelfBookListApiUrlModel.QUERY_KEY_VIEW_STATUS}=${props.viewStatus}`;
        }

        if (props.bookCategory) {
            queryParam += `&${BookshelfBookListApiUrlModel.QUERY_KEY_CATEGORY}=${props.bookCategory}`;
        }

        if (props.bookTag) {
            queryParam += `&${BookshelfBookListApiUrlModel.QUERY_KEY_TAG}=${props.bookTag}`;
        }

        if (props.sortKey) {
            queryParam += `&${BookshelfBookListApiUrlModel.QUERY_KEY_SORT}=${props.sortKey}`;
        }

        if (props.bookshelfLevel) {
            queryParam += `&${BookshelfBookListApiUrlModel.QUERY_KEY_FAVORITE_LEVEL}=${props.bookshelfLevel}`;
        }

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        this._url = `${BookshelfBookListApiUrlModel.BOOK_INFO_PATH}${queryParam}`;
        this._query = `${queryParam}`;
    }

    get url() {
        return this._url;
    }

    get query() {
        return this._query;
    }
}