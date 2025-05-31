import { atom } from "jotai";
import type { BookshelfBookListMergedType } from "../Type/FavoriteVideoListMergedType";

// APIから取得した書籍リスト
export const bookshelfBookListAtom = atom<BookshelfBookListMergedType[] | undefined>();
// キーワード検索(コメント)用URL
export const searchKeywordCommentUrlAtom = atom<string>(``);
// キーワード検索(コメント)キーワード
export const searchKeywordCommentKeywordAtom = atom<string>(``);
// 書籍一覧検索条件選択値(カテゴリ)
export const selectedBookshelfBookCategoryAtom = atom<string>(``);
// 書籍一覧検索条件選択値(視聴状況)
export const selectedBookshelfBookviewStatusAtom = atom<string>(``);
// 書籍取得用URL
export const bookshelfBookApiUrlAtom = atom<string>(``);
// 書籍一覧検索条件選択値(タグ)
export const selectedBookshelfBookTagAtom = atom<string>(``);
// 書籍一覧ソートキー
export const selectedBookshelfBookSortKeyAtom = atom<string>(``);
// 書籍一覧検索条件選択値(お気に入り度)
export const selectedBookshelfBookBookshelfLevelAtom = atom<string>(``);