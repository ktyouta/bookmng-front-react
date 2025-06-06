import React from "react";
import styled from "styled-components";
import { useBookshelfBookArea } from "../Hook/useBookshelfBookArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import type { BookshelfBookListMergedType } from "../Type/FavoriteVideoListMergedType";
import { BookshelfBookContent } from "./BookshelfBookContent";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const BookUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(121px, 1fr));
  margin: 0px;
  padding: 4% 5% 0px;
  width: 100%;
  box-sizing: border-box;
  gap: 20px 3%;
`;

const MessageDiv = styled.div`
  position: absolute;
  top: 32%;
  left: 42%;
`;


export function BookshelfBookArea() {

  console.log("BookshelfBookArea render");

  const {
    bookListItem,
    isLoading,
    errMessage,
    isFetching,
    isCalledListApi, } = useBookshelfBookArea();

  // ローディング
  if (!isCalledListApi) {
    return <LoadingBase />;
  }

  if (isLoading || isFetching) {
    return <LoadingBase />;
  }

  if (errMessage) {
    return (
      <MessageDiv>
        {errMessage}
      </MessageDiv>
    );
  }

  if (!bookListItem || bookListItem.length === 0) {
    return (
      <MessageDiv>
        本棚に書籍が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <BookUl>
        {
          bookListItem?.map((e: BookshelfBookListMergedType) => {
            return (
              <BookshelfBookContent
                data={e}
                key={e.bookId}
              />
            )
          })
        }
      </BookUl>
    </Parent>
  );
}