import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { useBookshelfReview } from "../Hook/useBookshelfReview";
import { REVIEW_EDIT_MODE, SUMMARY_EDIT_MODE } from "../Const/BookshelfConst";
import { BookshelfReviewView } from "./BookshelfReviewView";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfReviewEditIcon } from "./BookshelfReviewEditIcon";
import { BookshelfReviewEdit } from "./BookshelfReviewEdit";
import { BookshelfReviewCancelIcon } from "./BookshelfReviewCancelIcon";
import { BookshelfReviewCommitIcon } from "./BookshelfReviewCommitIcon";
import { useBookshelfSummary } from "../Hook/useBookshelfSummary";
import { BookshelfSummaryView } from "./BookshelfSummaryView";
import { BookshelfSummaryEdit } from "./BookshelfSummaryEdit";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 15px;
  border: solid 1px;
  padding:2%;
`;

const ContentDiv = styled.div`
`;

type propsType = {
    bookDetail: BookshelfBookDetailMergedType,
}

export function BookshelfSummary(props: propsType) {

    console.log("BookshelfSummary render");

    const {
        editMode,
        changeEdit,
        cancel,
        initSummary,
        setInitSummary,
    } = useBookshelfSummary({ ...props });

    return (
        <Parent>
            <ContentDiv>
                {
                    // 閲覧
                    editMode === SUMMARY_EDIT_MODE.VIEW &&
                    <BookshelfSummaryView
                        summary={initSummary}
                        changeEdit={changeEdit}
                    />
                }
                {
                    // 編集
                    editMode === SUMMARY_EDIT_MODE.EDIT &&
                    <BookshelfSummaryEdit
                        initSummary={initSummary}
                        cancel={cancel}
                        setInitSummary={setInitSummary}
                    />
                }
            </ContentDiv>
        </Parent>
    );
}