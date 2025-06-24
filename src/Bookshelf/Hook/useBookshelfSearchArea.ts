import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { useState } from "react";
import type { comboType } from "../../Common/Component/ComboComponent";
import type { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { useBookshelfListApiUrl } from "./useBookshelfListApiUrl";
import ENV from "../../env.json";
import type { BookshelfSortListResponseType } from "../Type/BookshelfSortListResponseType";
import type { BookshelfSortType } from "../Type/BookshelfSortType";


export function useBookshelfSearchArea() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // ソートリスト
    const [sortList, setSortList] = useState<comboType[]>([]);
    // 本棚一覧取得用フック
    const {
        changeUrl,
        selectedBookshelfTag,
        selectedFavoriteVideoSortKey, } = useBookshelfListApiUrl();


    // ソートリストを取得
    const { isLoading, isFetching } = useQueryWrapper<BookshelfSortListResponseType>(
        {
            url: `${BOOK_MNG_PATH}${ENV.BOOKSHELF_SORT_LIST}`,
            afSuccessFn: (response: BookshelfSortListResponseType) => {
                setSortList(response.data.map((e: BookshelfSortType) => {
                    return {
                        label: e.label,
                        value: e.id,
                    }
                }));
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * ソートリスト選択
     * @param value 
     */
    function selectSort(value: string) {

        changeUrl({
            sortKey: value,
        });
    }

    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isLoading,
        isFetching,
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        selectedBookshelfTag,
    }
}