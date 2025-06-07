import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { keywordAtom, startIndexAtom } from "../Atom/HomeAtom";
import { BookListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";

export function useHome() {

    // 書籍ID
    const [bookId, setBookId] = useState(``);
    // 書籍取得用URL
    const [bookApiUrl, setBookApiUrl] = useState(``);

    return {
        bookId,
        setBookId,
        bookApiUrl,
        setBookApiUrl,
    }
}