import { useAtomValue, useSetAtom } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import useSwitch from "../../Common/Hook/useSwitch";
import ENV from "../../env.json";
import type { tagType } from "../../Common/Component/TagsComponent";
import { toast } from "react-toastify";
import { BookshelfBookIdContext } from "../Component/Bookshelf";
import { bookshelfTagEditListAtom, bookshelfTagListAtom } from "../Atom/BookshelfAtom";
import type { BookshelfTagType } from "../Type/BookshelfTagType";
import { useBookshelfTagEndpoint } from "./useBookshelfTagEndpoint";
import type { UpdateToBookshelfTagReqestType } from "../Type/UpdateToBookshelfTagReqestType";
import type { UpdateBookshelfTagType } from "../Type/UpdateBookshelfTagType";


type propsType = {
    changeView: () => void,
}

export function useBookshelfTagEditUpdateIcon(props: propsType) {

    // 更新ナビゲーション表示フラグ
    const { flag: isOpenUpdateNav, on: openUpdateNav, off: closeUpdateNav } = useSwitch();
    // タグ編集リスト
    const bookshelfTagEditList = useAtomValue(bookshelfTagEditListAtom);
    // 本棚ID
    const bookshelfId = BookshelfBookIdContext.useCtx();
    // タグリスト
    const setBookshelfTagList = useSetAtom(bookshelfTagListAtom);


    /**
     * 本棚タグ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useBookshelfTagEndpoint(bookshelfId),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<BookshelfTagType[]>) => {
            setBookshelfTagList(res.data);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`タグの更新に失敗しました。`);
        },
    });

    /**
     * 本棚タグ更新
     * @returns 
     */
    function udpateTag() {
        if (!bookshelfTagEditList || bookshelfTagEditList.length === 0) {
            toast.error(`タグが設定されていません。`);
            return;
        }

        if (!bookshelfId) {
            toast.error(`タグを更新できません。`);
            return;
        }

        const body: UpdateToBookshelfTagReqestType = {
            tag: bookshelfTagEditList.reduce((prev: UpdateBookshelfTagType[], e: tagType) => {

                const value = e.value;

                if (typeof value === `string` || typeof value === `symbol`) {
                    return prev;
                }

                prev.push({
                    id: value ?? undefined,
                    name: e.label
                });

                return prev;
            }, [])
        }

        // リクエスト送信
        postMutation.mutate(body);

        // 閲覧画面に遷移する
        props.changeView();
    }

    return {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
        udpateTag,
    }
}