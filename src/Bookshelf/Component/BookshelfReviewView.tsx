import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfReviewEditIcon } from "./BookshelfReviewEditIcon";


const DescriptionDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 1%;
`;

const HeaderDiv = styled.div`
  height:20px;
  margin-bottom: 1%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 2%;
`;


type propsType = {
  review: string,
  changeEdit: () => void,
}

export function BookshelfReviewView(props: propsType) {

  console.log("BookshelfReviewView render");

  return (
    <React.Fragment>
      <HeaderDiv>
        <FlexSpaceDiv />
        <BookshelfReviewEditIcon
          changeEdit={props.changeEdit}
        />
      </HeaderDiv>
      <DescriptionDiv>
        {props.review ?? `未登録`}
      </DescriptionDiv>
    </React.Fragment>
  );
}