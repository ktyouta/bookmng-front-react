import useSwitch from "../../Common/Hook/useSwitch";

export function useBookshelfTagEditCloseIcon() {

    // 閉じるナビゲーション表示フラグ
    const { flag: isOpenCloseNav, on: openCloseNav, off: closeCloseNav } = useSwitch();


    return {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
    }
}