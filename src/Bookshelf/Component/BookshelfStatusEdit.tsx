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

const SelectAreaDiv = styled.div`
  display: flex;
  align-items: center;
`;

const BirthDayLabelDiv = styled.div`
  margin-right:2px;
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
  cancel: () => void,
  setInitStatus: React.Dispatch<React.SetStateAction<BookshelfStatusType | undefined>>
}

export function BookshelfStatusEdit(props: propsType) {

  console.log("BookshelfStatusEdit render");

  const {
    status,
    setStatus,
    updateReview,
    readStatusList,
    clickFavoriteLevelIcon,
    yearSelectList,
    monthSelectList,
    daySelectList,
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
        {
          status &&
          <React.Fragment>
            {
              readStatusList &&
              <React.Fragment>
                <TitleDiv>
                  【読書状況】
                </TitleDiv>
                <MetaDiv>
                  <ComboComponent
                    combo={readStatusList}
                    initValue={status.readStatus}
                    onChange={(value) => {
                      setStatus((e) => {
                        if (!e) {
                          return e;
                        }
                        return {
                          ...e,
                          readStatus: value
                        };
                      })
                    }}
                    width="25%"
                    height="39px"
                    selectStyle={{
                      backgroundColor: "#D3D9DE",
                      color: "#2C3E50",
                    }}
                  />
                </MetaDiv>
              </React.Fragment>
            }
            <TitleDiv>
              【購入日】
            </TitleDiv>
            <MetaDiv>
              <SelectAreaDiv>
                {
                  yearSelectList && yearSelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={yearSelectList}
                      initValue={status.purchaseDate.year}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            purchaseDate: {
                              ...e.purchaseDate,
                              year: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    <BirthDayLabelDiv>
                      年
                    </BirthDayLabelDiv>
                  </React.Fragment>
                }
                {
                  monthSelectList && monthSelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={monthSelectList}
                      initValue={status.purchaseDate.month}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            purchaseDate: {
                              ...e.purchaseDate,
                              month: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        marginLeft: `1%`,
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    <BirthDayLabelDiv>
                      月
                    </BirthDayLabelDiv>
                  </React.Fragment>
                }
                {
                  daySelectList && daySelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={daySelectList}
                      initValue={status.purchaseDate.day}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            purchaseDate: {
                              ...e.purchaseDate,
                              day: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        marginLeft: `1%`,
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    日
                  </React.Fragment>
                }
              </SelectAreaDiv>
            </MetaDiv>
            <TitleDiv>
              【読書開始日】
            </TitleDiv>
            <MetaDiv>
              <SelectAreaDiv>
                {
                  yearSelectList && yearSelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={yearSelectList}
                      initValue={status.startDate.year}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            startDate: {
                              ...e.startDate,
                              year: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    <BirthDayLabelDiv>
                      年
                    </BirthDayLabelDiv>
                  </React.Fragment>
                }
                {
                  monthSelectList && monthSelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={monthSelectList}
                      initValue={status.startDate.month}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            startDate: {
                              ...e.startDate,
                              month: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        marginLeft: `1%`,
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    <BirthDayLabelDiv>
                      月
                    </BirthDayLabelDiv>
                  </React.Fragment>
                }
                {
                  daySelectList && daySelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={daySelectList}
                      initValue={status.startDate.day}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            startDate: {
                              ...e.startDate,
                              day: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        marginLeft: `1%`,
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    日
                  </React.Fragment>
                }
              </SelectAreaDiv>
            </MetaDiv>
            <TitleDiv>
              【読書終了日】
            </TitleDiv>
            <MetaDiv>
              <SelectAreaDiv>
                {
                  yearSelectList && yearSelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={yearSelectList}
                      initValue={status.endDate.year}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            endDate: {
                              ...e.endDate,
                              year: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    <BirthDayLabelDiv>
                      年
                    </BirthDayLabelDiv>
                  </React.Fragment>
                }
                {
                  monthSelectList && monthSelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={monthSelectList}
                      initValue={status.endDate.month}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            endDate: {
                              ...e.endDate,
                              month: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        marginLeft: `1%`,
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    <BirthDayLabelDiv>
                      月
                    </BirthDayLabelDiv>
                  </React.Fragment>
                }
                {
                  daySelectList && daySelectList.length > 0 &&
                  <React.Fragment>
                    <ComboComponent
                      combo={daySelectList}
                      initValue={status.endDate.day}
                      width="13%"
                      minWidth="8%"
                      height="39px"
                      onChange={(value) => {
                        setStatus((e) => {
                          if (!e) {
                            return e;
                          }
                          return {
                            ...e,
                            endDate: {
                              ...e.endDate,
                              day: value
                            }
                          };
                        });
                      }}
                      selectStyle={{
                        marginLeft: `1%`,
                        backgroundColor: "#D3D9DE",
                        color: "#2C3E50",
                      }}
                    />
                    日
                  </React.Fragment>
                }
              </SelectAreaDiv>
            </MetaDiv>
            <TitleDiv>
              【お気に入り度】
            </TitleDiv>
            <FavoriteLevelAreaDiv>
              {
                [...Array(FAVORITE_LEVEL_SETTING_LIST)].map((_, index) => {

                  const favoriteLevel = index + 1;
                  const color = status.favoriteLevel >= favoriteLevel ? `#F5A623` : ``;

                  return (
                    <IconComponent
                      icon={FaStar}
                      size="25px"
                      style={{
                        color,
                      }}
                      key={favoriteLevel}
                      onclick={() => {
                        clickFavoriteLevelIcon(favoriteLevel);
                      }}
                    />
                  )
                })
              }
            </FavoriteLevelAreaDiv>
          </React.Fragment>
        }
      </MetaInfoAreaDiv>
    </React.Fragment>
  );
}