import { useAtom, useAtomValue } from "jotai";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";
import type { AddToFavoriteRequestType } from "../Type/AddToFavoriteRequestType";
import type { AddToFavoriteResponseType } from "../Type/AddToFavoriteResponseType";
import { BookIdContext } from "../Component/Home";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";



export function useHomeBookDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = useSelector((state: RootState) => state.isLoginReducer);
    // 本棚書籍ID
    const bookId = BookIdContext.useCtx();


    /**
     * 本棚登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${BOOK_MNG_PATH}${ENV.BOOKSHELF}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<AddToFavoriteResponseType>) => {

            const message = res.message;
            if (message) {
                toast.success(message);
            }

            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * 書籍を本棚に登録する
     * @param bookId 
     * @returns 
     */
    function addToFavorite() {

        if (!bookId) {
            toast.error(`本棚に登録できません。`);
            return;
        }

        const body: AddToFavoriteRequestType = {
            bookId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }


    /**
     * ログイン画面に遷移
     */
    function moveLogin() {

        let query = ``;

        if (bookId) {
            query = `?backpath=${ROUTER_PATH.HOME}/${bookId}&nextpath=${ROUTER_PATH.HOME}/${bookId}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${query}`);
    }

    return {
        addToFavorite,
        isLogin,
        moveLogin,
    }
}