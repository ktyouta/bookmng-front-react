import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { BookshelfReviewEditIcon } from "./BookshelfReviewEditIcon";
import { useBookshelfStatusView } from "../Hook/useBookshelfStatusView";
import { FAVORITE_LEVEL_SETTING_LIST } from "../Const/BookshelfConst";
import { FaStar } from "react-icons/fa";
import type { BookshelfStatusType } from "../Type/BookshelfStatusType";


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

const FavoriteLevelAreaDiv = styled.div`
  box-sizing:border-box;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  grid-column-gap: 2%;
`;

type propsType = {
  initStatus: BookshelfStatusType,
  changeEdit: () => void,
}

export function BookshelfStatusView(props: propsType) {

  console.log("BookshelfStatusView render");

  const { readStatusList } = useBookshelfStatusView();

  const purchaseDate = props.initStatus.purchaseDate;
  const startDate = props.initStatus.startDate;
  const endDate = props.initStatus.endDate;

  return (
    <React.Fragment>
      <HeaderDiv>
        <FlexSpaceDiv />
        <BookshelfReviewEditIcon
          changeEdit={props.changeEdit}
        />
      </HeaderDiv>
      <MetaInfoAreaDiv>
        <TitleDiv>
          【読書状況】
        </TitleDiv>
        <MetaDiv>
          {
            readStatusList.find((e) => {
              return e.value === props.initStatus.readStatus
            })?.label ?? `未設定`
          }
        </MetaDiv>
        <TitleDiv>
          【購入日】
        </TitleDiv>
        <MetaDiv>
          {purchaseDate && purchaseDate.length === 8 ?
            `${purchaseDate.slice(0, 4)}年${purchaseDate.slice(4, 6)}月${purchaseDate.slice(6, 8)}日`
            :
            `未登録`
          }
        </MetaDiv>
        <TitleDiv>
          【読書開始日】
        </TitleDiv>
        <MetaDiv>
          {
            startDate && startDate.length === 8 ?
              `${startDate.slice(0, 4)}年${startDate.slice(4, 6)}月${startDate.slice(6, 8)}日`
              :
              `未登録`
          }
        </MetaDiv>
        <TitleDiv>
          【読書終了日】
        </TitleDiv>
        <MetaDiv>
          {
            endDate && endDate.length === 8 ?
              `${endDate.slice(0, 4)}年${endDate.slice(4, 6)}月${endDate.slice(6, 8)}日`
              :
              `未登録`
          }
        </MetaDiv>
        <TitleDiv>
          【お気に入り度】
        </TitleDiv>
        <FavoriteLevelAreaDiv>
          {
            [...Array(FAVORITE_LEVEL_SETTING_LIST)].map((_, index) => {

              const favoriteLevel = index + 1;
              const color = props.initStatus.favoriteLevel >= favoriteLevel ? `yellow` : ``;

              return (
                <IconComponent
                  icon={FaStar}
                  size="25px"
                  style={{
                    color,
                  }}
                  key={favoriteLevel}
                />
              )
            })
          }
        </FavoriteLevelAreaDiv>
      </MetaInfoAreaDiv>
    </React.Fragment>
  );
}