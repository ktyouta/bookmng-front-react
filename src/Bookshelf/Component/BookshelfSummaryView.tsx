import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfReviewEditIcon } from "./BookshelfReviewEditIcon";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #CAD4DB;
  border-radius: 15px;
  border: solid 1px;
  padding:2%;
  border-color: #A5B1BA;
  color:#2C3E50;
`;

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
  summary: string,
  changeEdit: () => void,
}

export function BookshelfSummaryView(props: propsType) {

  console.log("BookshelfSummaryView render");

  return (
    <React.Fragment>
      <HeaderDiv>
        <FlexSpaceDiv />
        <BookshelfReviewEditIcon
          changeEdit={props.changeEdit}
        />
      </HeaderDiv>
      <DescriptionDiv>
        {props.summary}
      </DescriptionDiv>
    </React.Fragment>
  );
}