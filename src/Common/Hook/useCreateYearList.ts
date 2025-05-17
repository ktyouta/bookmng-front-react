import { useMemo } from "react";
import type { comboType } from "../Component/ComboComponent";

// 年の最小値
export const MIN_YEAR = 1900;

export function useCreateYearList() {

    /**
     * コンボボックス用のリスト(年)を作成
     */
    const yearCoomboList = useMemo(() => {

        // 現在年を取得
        const nowYear = new Date().getFullYear();

        let yearList: comboType[] = [];

        for (let i = MIN_YEAR; i <= nowYear; i++) {

            const yearStr = i.toString()
            yearList.push({
                label: yearStr,
                value: yearStr,
            });
        }

        return yearList;
    }, []);

    return yearCoomboList;
}