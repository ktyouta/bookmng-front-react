import { useAtom, useAtomValue } from "jotai";
import { bookshelfTagEditListAtom } from "../Atom/BookshelfAtom";


export function useBookshelfTagEditList() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setBookshelfVideoTagEditList] = useAtom(bookshelfTagEditListAtom);


    /**
     * タグ削除
     * @param tagIndex 
     */
    function deleteTag(tagIndex: number) {
        setBookshelfVideoTagEditList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    return {
        favoriteVideoTagEditList,
        deleteTag,
    }
}