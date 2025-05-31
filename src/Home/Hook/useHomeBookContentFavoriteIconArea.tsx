import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import useSwitch from "../../Common/Hook/useSwitch";


export function useHomeBookContentFavoriteIconArea() {

    // 本棚ナビゲーション表示フラグ
    const { flag: isOpenFavoriteNav, on: openFavoriteNav, off: closeFavoriteNav } = useSwitch();

    return {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
    }
}