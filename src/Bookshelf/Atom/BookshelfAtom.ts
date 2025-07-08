import { atom } from "jotai";
import type { BookshelfBookListMergedType } from "../Type/BookshelfBookListMergedType";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import type { BookshelfMemoType } from "../Type/BookshelfMemoType";
import type { BookshelfTagType } from "../Type/BookshelfTagType";
import type { tagType } from "../../Common/Component/TagsComponent";

// APIから取得した書籍リスト
export const bookshelfBookListAtom = atom<BookshelfBookListMergedType[] | undefined>();
// キーワード検索(コメント)用URL
export const searchKeywordCommentUrlAtom = atom<string>(``);
// キーワード検索(コメント)キーワード
export const searchKeywordCommentKeywordAtom = atom<string>(``);
// 書籍一覧検索条件選択値(カテゴリ)
export const selectedBookshelfBookCategoryAtom = atom<string>(``);
// 書籍一覧検索条件選択値(読書状況)
export const selectedBookshelfReadStatusAtom = atom<string>(``);
// 書籍取得用URL
export const bookshelfBookApiUrlAtom = atom<string>(``);
// 書籍一覧検索条件選択値(タグ)
export const selectedBookshelfTagAtom = atom<string>(``);
// 書籍一覧ソートキー
export const selectedBookshelfSortKeyAtom = atom<string>(``);
// 書籍一覧検索条件選択値(お気に入り度)
export const selectedBookshelfFavoriteLevelAtom = atom<string>(``);
// 本棚詳細
export const bookshelfDetailItemAtom = atom<BookshelfBookDetailMergedType>();
// 本棚メモ一覧
export const bookshelfMemoListAtom = atom<BookshelfMemoType[]>();
// タグリスト
export const bookshelfTagListAtom = atom<BookshelfTagType[]>();
// タグ編集リスト
export const bookshelfTagEditListAtom = atom<tagType[]>([]);