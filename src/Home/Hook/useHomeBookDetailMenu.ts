import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from '../../env.json';
import { MENU_NO } from "../Const/HomeConst";
import { useState } from "react";
import { BookIdContext } from "../Component/Home";


export function useHomeBookDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);
    // お気に入り書籍ID
    const bookId = BookIdContext.useCtx();

    return {
        openMenuNo,
        setOpenMenuNo,
        bookId,
    }
}