import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import { useBookshelfListApiUrl } from "./useBookshelfListApiUrl";
import type { ReadStatusResponseType } from "../Type/ReadStatusResponseType";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import type { comboType } from "../../Common/Component/ComboComponent";


export function useBookshelf() {

    // お気に入り書籍ID
    const [bookshelfBookId, setBookshelfBookId] = useState(``);
    // お気に入り書籍一覧取得用フック
    const { resetCondition, } = useBookshelfListApiUrl();
    // 読書状況
    const [readStatusList, setReadStatusList] = useState<comboType[]>([]);

    // 視聴状況リストを取得
    useQueryWrapper<ReadStatusResponseType>(
        {
            url: `${BOOK_MNG_PATH}${ENV.READ_STATUS}`,
            afSuccessFn: (response: ReadStatusResponseType) => {
                setReadStatusList(response.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.label,
                    }
                }));
            },
            afErrorFn: (res) => {
            }
        }
    );

    // URL直打ち対応
    useEffect(() => {

        // アンマウント時に検索条件をリセット
        return (() => {
            resetCondition();
        })

    }, []);

    return {
        bookshelfBookId,
        setBookshelfBookId,
        readStatusList,
    }
}