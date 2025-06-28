import { useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";



export function useBookshelfMemoCacelIconArea() {

    // キャンセルナビゲーション表示フラグ
    const { flag: isOpenCancelNav, on: openCancelNav, off: closeCancelNav } = useSwitch();

    return {
        isOpenCancelNav,
        openCancelNav,
        closeCancelNav,
    }
}