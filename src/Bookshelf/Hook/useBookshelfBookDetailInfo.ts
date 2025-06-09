import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { BookshelfBookIdContext } from "../Component/Bookshelf";



export function useBookshelfBookDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);
    // 本棚書籍ID
    const bookId = BookshelfBookIdContext.useCtx();

    return {}
}