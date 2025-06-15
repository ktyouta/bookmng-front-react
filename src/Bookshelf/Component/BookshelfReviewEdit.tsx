import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import BaseTextAreaComponent from "../../Common/Component/BaseTextAreaComponent";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfReviewCancelIcon } from "./BookshelfReviewCancelIcon";
import { BookshelfReviewCommitIcon } from "./BookshelfReviewCommitIcon";
import { useBookshelfReviewEdit } from "../Hook/useBookshelfReviewEdit";


const Parent = styled.div`
  box-sizing:border-box;
  padding-bottom: 1%;
  padding-left: 1%;
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
  initReview: string,
  cancel: () => void,
  setInitReview: React.Dispatch<React.SetStateAction<string>>,
}

export function BookshelfReviewEdit(props: propsType) {

  console.log("BookshelfReviewEdit render");

  const {
    review,
    setReview,
    updateReview,
  } = useBookshelfReviewEdit({ ...props });

  return (
    <React.Fragment>
      <HeaderDiv>
        <FlexSpaceDiv />
        {/* キャンセル */}
        <BookshelfReviewCancelIcon
          changeEdit={props.cancel}
        />
        {/* コミット */}
        <BookshelfReviewCommitIcon
          changeEdit={updateReview}
        />
      </HeaderDiv>
      <Parent>
        <BaseTextAreaComponent
          value={review}
          style={{
            backgroundColor: "#E4EBF1",
            minHeight: "450px",
            padding: "2%",
            boxSizing: "border-box",
            outline: "none",
            borderRadius: "15px",
          }}
          textWidth="98%"
          onChange={setReview}
        />
      </Parent>
    </React.Fragment>
  );
}