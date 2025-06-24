import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { objectDeepCopy } from "../../Common/Function/CommonFunction";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { ReadStatusListContext } from "../Component/Bookshelf";
import type { comboType } from "../../Common/Component/ComboComponent";
import { useBookshelfListApiUrl } from "./useBookshelfListApiUrl";
import { FAVORITE_LEVEL_SETTING_LIST } from "../Const/BookshelfConst";


type propsType = {
    close: () => void;
}

export function useBookshelfSearchConditionMain(props: propsType) {

    // 読書状況リスト
    const readStatusList = ReadStatusListContext.useCtx();
    // 読書状況選択リスト
    const [readStatusSelectList, setViewStatusSelectList] = useState<comboType[]>();
    // タグマスタリスト
    const [tagMasterList, setTagMasterList] = useState<comboType[]>([]);
    // お気に入り動画一覧取得用フック
    const {
        changeUrl,
        selectedBookshelfReadStatus,
        selectedFavoriteVideoFavoriteLevel, } = useBookshelfListApiUrl();

    /**
     * 画面表示用の読書状況リストを作成
     */
    useEffect(() => {

        // 読書状況選択リストが作成されている場合はスキップ
        if (readStatusSelectList && readStatusSelectList.length > 0) {
            return;
        }

        if (!readStatusList || readStatusList.length === 0) {
            return;
        }

        const copyViewStatusList = objectDeepCopy(readStatusList);
        const newViewStatusSelectList = [{
            value: ``,
            label: `すべて`,
        }, ...copyViewStatusList];

        setViewStatusSelectList(newViewStatusSelectList);

    }, readStatusList);


    // お気に入り度リスト
    const favoriteLevelList = useMemo(() => {

        const favoriteLevelList: comboType[] = [...Array(FAVORITE_LEVEL_SETTING_LIST + 1)].map((_, index) => {

            const label = index === 0 ? `未設定` : index.toString();

            return {
                label,
                value: index.toString(),
            }
        });

        return [{
            value: ``,
            label: `すべて`,
        }, ...favoriteLevelList];
    }, []);


    /**
     * 読書状況選択イベント
     * @param selectedcCategory 
     */
    function changeViewStatus(selectedViewStatus: string,) {

        changeUrl({
            readStatus: selectedViewStatus,
            callback: props.close,
        });
    }

    /**
     * お気に入り度選択イベント
     * @param selectedcCategory 
     */
    function changeFavoriteLevel(selectedFavoriteLevel: string,) {

        changeUrl({
            favoriteLevel: selectedFavoriteLevel,
            callback: props.close,
        });
    }

    return {
        readStatusSelectList,
        changeViewStatus,
        tagMasterList,
        favoriteLevelList,
        selectedFavoriteVideoFavoriteLevel,
        changeFavoriteLevel,
        selectedBookshelfReadStatus,
    };
}