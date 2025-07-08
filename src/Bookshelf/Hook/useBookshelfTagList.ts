import { useAtom, useAtomValue } from "jotai";
import { bookshelfTagListAtom } from "../Atom/BookshelfAtom";


export function useBookshelfTagList() {

    // タグリスト
    const bookshelfTagList = useAtomValue(bookshelfTagListAtom);

    return {
        bookshelfTagList
    }
}