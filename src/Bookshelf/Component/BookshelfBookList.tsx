import React from "react";
import { BookshelfBookArea } from "./BookshelfBookArea";
import styled from "styled-components";
import { BookshelfSearchArea } from "./BookshelfSearchArea";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
`;


export function BookshelfBookList() {

    console.log("BookshelfBookList render");

    return (
        <Parent>
            {/* 検索条件エリア */}
            <BookshelfSearchArea />
            {/* 書籍表示エリア */}
            <BookshelfBookArea />
        </Parent>
    );
}