import { useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";


export function useBookshelfMemoUpdateIconArea() {

    // 更新ナビゲーション表示フラグ
    const { flag: isOpenUpdateNav, on: openUpdateNav, off: closeUpdateNav } = useSwitch();

    return {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
    }
}