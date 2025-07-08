import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { toast } from "react-toastify";
import type { tagType } from "../../Common/Component/TagsComponent";
import { bookshelfTagEditListAtom, bookshelfTagListAtom } from "../Atom/BookshelfAtom";
import type { BookshelfTagResponseType } from "../Type/BookshelfTagResponseType";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import type { BookshelfTagType } from "../Type/BookshelfTagType";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";


export function useBookshelfTagCreateInput() {

    // サジェスト用タグリスト
    const [suggestTagList, setSuggestTagList] = useState<tagType[]>([]);
    // 追加用タグリスト
    const [addTagList, setAddTagList] = useState<tagType[]>([]);
    // タグ編集リスト
    const [bookshelfTagEditList, setBookshelfTagEditList] = useAtom(bookshelfTagEditListAtom);
    // 本棚タグリスト
    const bookshelfTagList = useAtomValue(bookshelfTagListAtom);

    // サジェスト用タグリストを取得
    useQueryWrapper<BookshelfTagResponseType>(
        {
            url: `${BOOK_MNG_PATH}${ENV.TAG_LIST}`,
            afSuccessFn: (response: BookshelfTagResponseType) => {
                setSuggestTagList(response.data.map((e: BookshelfTagType) => {
                    return {
                        value: e.tagId,
                        label: e.tagName,
                    }
                }));
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * 本棚タグリストをタグ編集リストにセットする
     */
    useEffect(() => {

        if (!bookshelfTagList) {
            setBookshelfTagEditList([]);
            return;
        }

        setBookshelfTagEditList(bookshelfTagList.map((e) => {
            return {
                label: e.tagName,
                value: e.tagId,
            }
        }));
    }, [bookshelfTagList]);

    /**
     * タグを追加
     */
    function addTag(newTag: tagType) {

        setAddTagList((e) => {

            if (bookshelfTagEditList.find((e1) => e1.label === newTag.label)) {
                toast.error(`同名のタグが設定されています。`);
                return e;
            }

            if (e.find((e1) => e1.label === newTag.label)) {
                toast.error(`同名のタグを設定できません。`);
                return e;
            }

            return [...e, { label: newTag.label, value: null }];
        });
    }

    /**
     * タグを削除
     * @param tag 
     */
    function deleteTag(tagIndex: number) {

        setAddTagList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    /**
     * 入力欄のタグを編集リストに追加する
     */
    function addTagEditList() {
        // 編集リストに追加
        setBookshelfTagEditList((e) => {
            return [...addTagList, ...e];
        });

        // 追加用タグリストをリセット
        setAddTagList([]);
    }

    return {
        suggestTagList,
        addTagList,
        addTag,
        deleteTag,
        addTagEditList,
    }
}