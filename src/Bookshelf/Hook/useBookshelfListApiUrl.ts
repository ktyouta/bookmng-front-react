import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ENV from "../../env.json";
import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { bookshelfBookApiUrlAtom, selectedBookshelfFavoriteLevelAtom, selectedBookshelfReadStatusAtom, selectedBookshelfSortKeyAtom, selectedBookshelfTagAtom } from "../Atom/BookshelfAtom";

type CreateUrlPropsType = {
    readStatus?: string,
    bookCategory?: string,
    bookTag?: string,
    sortKey?: string,
    favoriteLevel?: string,
    callback?: () => void,
}


// 書籍一覧取得エンドポイント
const BOOK_INFO_PATH = `${BOOK_MNG_PATH}${ENV.BOOKSHELF}`;
// クエリパラメータのキー(読書状況)
const QUERY_KEY_VIEW_STATUS = `viewstatus`;
// クエリパラメータのキー(タグ)
const QUERY_KEY_TAG = `booktag`;
// クエリパラメータのキー(ソート)
const QUERY_KEY_SORT = `sortkey`;
// クエリパラメータのキー(お気に入り度)
const QUERY_KEY_FAVORITE_LEVEL = `bookshelflevel`;


/**
 * お気に入り書籍一覧取得用フック
 */
export function useBookshelfListApiUrl() {

    // 本棚リスト取得URL
    const [bookshelfBookUrl, setBookshelfBookUrl] = useAtom(bookshelfBookApiUrlAtom);
    //ルーティング用
    const navigate = useNavigate();
    // 動画一覧検索条件選択値(読書状況)
    const [selectedBookshelfReadStatus, setSelectedBookshelfReadStatus] = useAtom(selectedBookshelfReadStatusAtom);
    // 動画一覧検索条件選択値(タグ)
    const [selectedBookshelfTag, setSelectedBookshelfTagAtom] = useAtom(selectedBookshelfTagAtom);
    // 動画一覧検索条件選択値(お気に入り度)
    const [selectedFavoriteVideoFavoriteLevel, setSelectedFavoriteVideoFavoriteLevel] = useAtom(selectedBookshelfFavoriteLevelAtom);
    // 動画一覧検索ソートキー
    const [selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey] = useAtom(selectedBookshelfSortKeyAtom);

    /**
     * お気に入り書籍一覧取得URLの切り替え
     * @param props 
     */
    function changeUrl(props: CreateUrlPropsType) {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, QUERY_KEY_VIEW_STATUS, props.readStatus, selectedBookshelfReadStatus, setSelectedBookshelfReadStatus);
        queryParam = appendQuery(queryParam, QUERY_KEY_TAG, props.bookTag, selectedBookshelfTag, setSelectedBookshelfTagAtom);
        queryParam = appendQuery(queryParam, QUERY_KEY_SORT, props.sortKey, selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey);
        queryParam = appendQuery(queryParam, QUERY_KEY_FAVORITE_LEVEL, props.favoriteLevel, selectedFavoriteVideoFavoriteLevel, setSelectedFavoriteVideoFavoriteLevel);

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        const url = `${BOOK_INFO_PATH}${queryParam}`;
        const query = `${queryParam}`;

        setBookshelfBookUrl(url);
        navigate(query);

        if (props.callback) {
            props.callback();
        }
    }

    /**
     * 検索条件をリセット
     */
    function resetCondition() {

        setSelectedBookshelfReadStatus(``);
        setSelectedBookshelfTagAtom(``);
        setSelectedFavoriteVideoSortKey(``);
        setSelectedFavoriteVideoFavoriteLevel(``);
    }

    /**
     * クエリパラメータ作成
     * @param query 
     * @param key 
     * @param value 
     * @param nowValue 
     * @param setValue 
     * @returns 
     */
    function appendQuery(
        query: string,
        key: string,
        value?: string,
        nowValue?: string,
        setValue?: (v: string) => void
    ) {

        let retQuery = ``;

        if (value !== undefined) {
            setValue?.(value);
            retQuery = value ? `${query}&${key}=${value}` : query;
        }
        else {
            retQuery = nowValue ? `${query}&${key}=${nowValue}` : query;
        }

        return retQuery;
    }

    /**
     * クエリパラメータ
     */
    const queryParam = useMemo(() => {

        const urlArray = bookshelfBookUrl.split(`?`);
        const query = urlArray.length > 1 ? `?${urlArray[1]}` : ``;

        return query;
    }, [bookshelfBookUrl]);

    return {
        bookshelfBookUrl,
        changeUrl,
        resetCondition,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey,
        queryParam,
        selectedBookshelfTag,
        selectedBookshelfReadStatus,
    }
}