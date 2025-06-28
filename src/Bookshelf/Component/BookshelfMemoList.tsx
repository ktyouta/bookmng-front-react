import styled from "styled-components";
import { useBookshelfMemoList } from "../Hook/useBookshelfMemoList";
import { BookshelfMemoContent } from "./BookshelfMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import type { BookshelfMemoType } from "../Type/BookshelfMemoType";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
`;

const MemoListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;


export function BookshelfMemoList() {

    console.log("BookshelfMemoList render");

    const {
        isLoading,
        bookshelfMemoList,
        errMessage, } = useBookshelfMemoList();

    if (isLoading) {
        return (
            <Parent>
                <LoadingBase />
            </Parent>
        );
    }

    if (errMessage) {
        return (
            <Parent>
                {errMessage}
            </Parent>
        );
    }

    return (
        <Parent>
            {
                bookshelfMemoList && bookshelfMemoList.length > 0 ?
                    <MemoListAreaDiv>
                        {
                            bookshelfMemoList.map((e: BookshelfMemoType) => {

                                const memoId = e.seq

                                return (
                                    <BookshelfMemoContent
                                        bookshelfMemo={e}
                                        key={memoId}
                                    />
                                )
                            })
                        }
                    </MemoListAreaDiv>
                    :
                    `メモが登録されていません。`
            }
        </Parent>
    );
}