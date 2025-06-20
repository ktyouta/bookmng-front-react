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

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:4%;
`;

type propsType = {
  bookDetail: BookshelfBookDetailMergedType,
  changeEdit: () => void,
}

export function BookshelfStatusView(props: propsType) {

  console.log("BookshelfStatusView render");

  return (
    <React.Fragment>
      <HeaderDiv>
        <FlexSpaceDiv />
        <BookshelfReviewEditIcon
          changeEdit={props.changeEdit}
        />
      </HeaderDiv>
      <DescriptionDiv>
        <TitleDiv>
          【読書状況】
        </TitleDiv>
        <MetaDiv>

        </MetaDiv>
        <TitleDiv>
          【購入日】
        </TitleDiv>
        <MetaDiv>

        </MetaDiv>
        <TitleDiv>
          【読書開始日】
        </TitleDiv>
        <MetaDiv>

        </MetaDiv>
        <TitleDiv>
          【読書終了日】
        </TitleDiv>
        <MetaDiv>

        </MetaDiv>
      </DescriptionDiv>
    </React.Fragment>
  );
}