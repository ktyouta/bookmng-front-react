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
import { useBookshelfStatusEdit } from "../Hook/useBookshelfStatusEdit";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST } from "../../Common/Const/CommonConst";


const MetaInfoAreaDiv = styled.div`
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

const SelectAreaDiv = styled.div`
  display: flex;
  align-items: center;
`;

const BirthDayLabelDiv = styled.div`
  margin-right:2px;
`;

type propsType = {
  initStatus: BookshelfBookDetailMergedType,
  cancel: () => void,
  setInitStatus: React.Dispatch<React.SetStateAction<BookshelfBookDetailMergedType | undefined>>
}

export function BookshelfStatusEdit(props: propsType) {

  console.log("BookshelfStatusEdit render");

  const {
    status,
    setStatus,
    updateReview,
    yearCoomboList,
  } = useBookshelfStatusEdit({ ...props });

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
      <MetaInfoAreaDiv>
        <TitleDiv>
          【読書状況】
        </TitleDiv>
        <MetaDiv>

        </MetaDiv>
        <TitleDiv>
          【購入日】
        </TitleDiv>
        <MetaDiv>
          <SelectAreaDiv>
            <ComboComponent
              combo={yearCoomboList}
              initValue={yearCoomboList[0].value}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const purchaseDate = e.purchaseDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const newPurchaseDate = `${value}${purchaseDate.slice(4)}`;
                  return { ...e, purchaseDate: newPurchaseDate };
                });
              }}
            />
            <BirthDayLabelDiv>
              年
            </BirthDayLabelDiv>
            <ComboComponent
              combo={MONTH_LIST}
              initValue={MONTH_LIST && MONTH_LIST.length > 0 ? MONTH_LIST[0].value : ``}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const purchaseDate = e.purchaseDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const year = purchaseDate.slice(4);
                  const day = purchaseDate.slice(6, 8);
                  const newPurchaseDate = `${year}${value}${day}`;
                  return { ...e, purchaseDate: newPurchaseDate };
                });
              }}
              selectStyle={{
                marginLeft: `1%`
              }}
            />
            <BirthDayLabelDiv>
              月
            </BirthDayLabelDiv>
            <ComboComponent
              combo={DAY_LIST}
              initValue={DAY_LIST && DAY_LIST.length > 0 ? DAY_LIST[0].value : ``}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const purchaseDate = e.purchaseDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const yearDay = purchaseDate.slice(6);
                  const newPurchaseDate = `${yearDay}${value}`;
                  return { ...e, purchaseDate: newPurchaseDate };
                });
              }}
              selectStyle={{
                marginLeft: `1%`
              }}
            />
            日
          </SelectAreaDiv>
        </MetaDiv>
        <TitleDiv>
          【読書開始日】
        </TitleDiv>
        <MetaDiv>
          <SelectAreaDiv>
            <ComboComponent
              combo={yearCoomboList}
              initValue={yearCoomboList[0].value}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const startDate = e.startDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const newStartDate = `${value}${startDate.slice(4)}`;
                  return { ...e, startDate: newStartDate };
                });
              }}
            />
            <BirthDayLabelDiv>
              年
            </BirthDayLabelDiv>
            <ComboComponent
              combo={MONTH_LIST}
              initValue={MONTH_LIST && MONTH_LIST.length > 0 ? MONTH_LIST[0].value : ``}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const startDate = e.startDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const year = startDate.slice(4);
                  const day = startDate.slice(6, 8);
                  const newStartDate = `${year}${value}${day}`;
                  return { ...e, startDate: newStartDate };
                });
              }}
              selectStyle={{
                marginLeft: `1%`
              }}
            />
            <BirthDayLabelDiv>
              月
            </BirthDayLabelDiv>
            <ComboComponent
              combo={DAY_LIST}
              initValue={DAY_LIST && DAY_LIST.length > 0 ? DAY_LIST[0].value : ``}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const startDate = e.startDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const yearDay = startDate.slice(6);
                  const newStartDate = `${yearDay}${value}`;
                  return { ...e, startDate: newStartDate };
                });
              }}
              selectStyle={{
                marginLeft: `1%`
              }}
            />
            日
          </SelectAreaDiv>
        </MetaDiv>
        <TitleDiv>
          【読書終了日】
        </TitleDiv>
        <MetaDiv>
          <SelectAreaDiv>
            <ComboComponent
              combo={yearCoomboList}
              initValue={yearCoomboList[0].value}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const endDate = e.endDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const newEndDate = `${value}${endDate.slice(4)}`;
                  return { ...e, endDate: newEndDate };
                });
              }}
            />
            <BirthDayLabelDiv>
              年
            </BirthDayLabelDiv>
            <ComboComponent
              combo={MONTH_LIST}
              initValue={MONTH_LIST && MONTH_LIST.length > 0 ? MONTH_LIST[0].value : ``}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const endDate = e.endDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const year = endDate.slice(4);
                  const day = endDate.slice(6, 8);
                  const newEndDate = `${year}${value}${day}`;
                  return { ...e, endDate: newEndDate };
                });
              }}
              selectStyle={{
                marginLeft: `1%`
              }}
            />
            <BirthDayLabelDiv>
              月
            </BirthDayLabelDiv>
            <ComboComponent
              combo={DAY_LIST}
              initValue={DAY_LIST && DAY_LIST.length > 0 ? DAY_LIST[0].value : ``}
              width="13%"
              minWidth="8%"
              height="39px"
              onChange={(value) => {
                setStatus((e) => {
                  const endDate = e.endDate ?? `${yearCoomboList[0].value}${MONTH_LIST[0].value}${DAY_LIST[0].value}`;
                  const yearDay = endDate.slice(6);
                  const newEndDate = `${yearDay}${value}`;
                  return { ...e, endDate: newEndDate };
                });
              }}
              selectStyle={{
                marginLeft: `1%`
              }}
            />
            日
          </SelectAreaDiv>
        </MetaDiv>
        <TitleDiv>
          【お気に入り度】
        </TitleDiv>
        <MetaDiv>
        </MetaDiv>
      </MetaInfoAreaDiv>
    </React.Fragment>
  );
}