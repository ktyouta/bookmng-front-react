import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import useSwitch from "../../Common/Hook/useSwitch";


export function useHomeBookshelfIconArea() {

    // 本棚ナビゲーション表示フラグ
    const { flag: isOpenBookshelfNav, on: openBookshelfNav, off: closeBookshelfNav } = useSwitch();

    return {
        isOpenBookshelfNav,
        openBookshelfNav,
        closeBookshelfNav,
    }
}