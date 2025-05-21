import React from "react";
import { HomeSearchArea } from "./HomeSearchArea";
import { HomeBookArea } from "./HomeBookArea";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
`;


export function HomeBookList() {

    console.log("HomeBookList render");

    return (
        <Parent>
            {/* 検索条件エリア */}
            <HomeSearchArea />
            {/* 書籍表示エリア */}
            <HomeBookArea />
        </Parent>
    );
}