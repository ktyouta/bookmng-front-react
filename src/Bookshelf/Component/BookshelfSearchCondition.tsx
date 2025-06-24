import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { BookshelfSearchConditionHeader } from "./BookshelfSearchConditionHeader";
import { BookshelfSearchConditionMain } from "./BookshelfSearchConditionMain";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
`;

type propsType = {
    close: () => void;
}

export function BookshelfSearchCondition(props: propsType) {

    console.log("BookshelfSearchCondition render");

    return (
        <Parent>
            {/* 検索条件指定ヘッダ */}
            <BookshelfSearchConditionHeader
                close={props.close}
            />
            {/* 検索条件指定コンテンツ */}
            <BookshelfSearchConditionMain
                close={props.close}
            />
        </Parent>
    );
}