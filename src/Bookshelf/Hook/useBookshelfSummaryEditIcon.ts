import useSwitch from "../../Common/Hook/useSwitch";

export function useBookshelfSummaryEditIcon() {

    // 編集ナビゲーション表示フラグ
    const { flag: isOpenEditNav, on: openEditNav, off: closeEditNav } = useSwitch();


    return {
        isOpenEditNav,
        openEditNav,
        closeEditNav,
    }
}