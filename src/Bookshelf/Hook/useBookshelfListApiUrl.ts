import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ENV from "../../env.json";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { bookshelfBookApiUrlAtom, selectedBookshelfBookBookshelfLevelAtom, selectedBookshelfBookCategoryAtom, selectedBookshelfBookSortKeyAtom, selectedBookshelfBookTagAtom, selectedBookshelfBookviewStatusAtom } from "../Atom/BookshelfAtom";

type CreateUrlPropsType = {
    viewStatus?: string,
    bookCategory?: string,
    bookTag?: string,
    sortKey?: string,
    bookshelfLevel?: string,
    callback?: () => void,
}


// 書籍一覧取得エンドポイント
const BOOK_INFO_PATH = `${BOOK_MNG_PATH}${ENV.BOOKSHELF}`;
// クエリパラメータのキー(視聴状況)
const QUERY_KEY_VIEW_STATUS = `viewstatus`;
// クエリパラメータのキー(カテゴリ)
const QUERY_KEY_CATEGORY = `bookcategory`;
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

    // お気に入り書籍リスト取得URL
    const setBookshelfBookUrl = useSetAtom(bookshelfBookApiUrlAtom);
    //ルーティング用
    const navigate = useNavigate();

    /**
     * お気に入り書籍一覧取得URLの切り替え
     * @param props 
     */
    function changeUrl(props: CreateUrlPropsType) {

        let queryParam = ``;

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

    return {
        changeUrl,
        resetCondition,
    }
}