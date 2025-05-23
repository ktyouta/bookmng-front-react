import { book_TYPE_LIST } from "../Const/HomeConst";
import type { BookDetailType } from "../Type/BookDetailType";
import type { GoogleBooksAPIsModelType } from "../Type/GoogleBooksAPIsModelType";
import type { GoogleBooksDetailResponseType } from "../Type/GoogleBooksDetailResponseType";
import type { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { atom } from "jotai";

// APIから取得した書籍リスト
export const bookListDataAtom = atom<GoogleBooksAPIsModelType | undefined>();
// 検索キーワード
export const keywordAtom = atom<string>(``);
// APIから取得した書籍詳細
export const bookDetailItemAtom = atom<BookDetailType>();
// 書籍リスト追加読み込み用
export const showMoreDataAtom = atom<ShowMoreDataType>();
// 書籍一覧検索条件選択値(種別)
export const selectedBookTypeAtom = atom<string>(book_TYPE_LIST[0].value);
// 書籍一覧検索条件選択値(カテゴリ)
export const selectedBookCategoryAtom = atom<string>(``);