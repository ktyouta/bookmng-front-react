import { useState } from "react";
import useSwitch from "../../Common/Hook/useSwitch";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { BOOK_MNG_PATH } from "../../Common/Const/CommonConst";
import { toast } from "react-toastify";
import type { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import type { UpdateBookshelfReviewResponseType } from "../Type/UpdateBookshelfReviewResponseType";
import type { UpdateBookshelfReviewRequestType } from "../Type/UpdateBookshelfReviewRequestType";
import ENV from "../../env.json";
import { BookshelfBookIdContext, ReadStatusListContext } from "../Component/Bookshelf";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { useCreateYearList } from "../../Common/Hook/useCreateYearList";


export function useBookshelfStatusView() {

    // 読書状況一覧
    const readStatusList = ReadStatusListContext.useCtx();

    return {
        readStatusList
    }
}