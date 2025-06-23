import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { useBookshelfReview } from "../Hook/useBookshelfReview";
import { REVIEW_EDIT_MODE, STATUS_EDIT_MODE } from "../Const/BookshelfConst";
import { BookshelfReviewView } from "./BookshelfReviewView";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfReviewEditIcon } from "./BookshelfReviewEditIcon";
import { BookshelfReviewEdit } from "./BookshelfReviewEdit";
import { BookshelfReviewCancelIcon } from "./BookshelfReviewCancelIcon";
import { BookshelfReviewCommitIcon } from "./BookshelfReviewCommitIcon";
import { useBookshelfStatus } from "../Hook/useBookshelfStatus";
import { BookshelfStatusView } from "./BookshelfStatusView";
import { BookshelfStatusEdit } from "./BookshelfStatusEdit";


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

const ContentDiv = styled.div`
`;


type propsType = {
    bookDetail: BookshelfBookDetailMergedType,
}

export function BookshelfStatus(props: propsType) {

    console.log("BookshelfStatus render");

    const {
        editMode,
        changeEdit,
        cancel,
        initStatus,
        setInitStatus,
    } = useBookshelfStatus({ ...props });


    return (
        <Parent>
            <ContentDiv>
                {
                    initStatus &&
                    <React.Fragment>
                        {
                            // 閲覧
                            editMode === STATUS_EDIT_MODE.VIEW &&
                            <BookshelfStatusView
                                initStatus={initStatus}
                                changeEdit={changeEdit}
                            />
                        }
                        {
                            // 編集
                            editMode === STATUS_EDIT_MODE.EDIT &&
                            <BookshelfStatusEdit
                                initStatus={initStatus}
                                cancel={cancel}
                                setInitStatus={setInitStatus}
                            />
                        }
                    </React.Fragment>
                }
            </ContentDiv>
        </Parent>
    );
}