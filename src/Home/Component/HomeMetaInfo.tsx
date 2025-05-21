import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import type { BookDetailItemType } from "../Type/BookDetailItemType";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding:2%;
`;

const ContentDiv = styled.div`
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
    bookId: string,
    bookDetail: BookDetailItemType | undefined,
}

export function HomeMetaInfo(props: propsType) {

    console.log("HomeMetaInfo render");

    const bookDetail = props.bookDetail;
    const item = bookDetail;
    // 書籍基本情報
    const volumeInfo = item?.volumeInfo;
    // タイトル
    const title = volumeInfo?.title;
    // 書籍説明
    //const description = volumeInfo?.;

    return (
        <Parent>
            <ContentDiv>
                <TitleDiv>
                    【タイトル】
                </TitleDiv>
                <MetaDiv>
                    {title}
                </MetaDiv>
                <TitleDiv>
                    【チャンネル】
                </TitleDiv>
                <MetaDiv>

                </MetaDiv>
                <TitleDiv>
                    【再生回数】
                </TitleDiv>
                <MetaDiv>

                </MetaDiv>
                <TitleDiv>
                    【高評価数】
                </TitleDiv>
                <MetaDiv>

                </MetaDiv>
                <TitleDiv>
                    【書籍説明】
                </TitleDiv>
                <MetaDiv>
                    {/* {
                        description &&
                        <AccordionComponent
                            defaultHeight={'70px'}
                            outerStyle={{
                                border: "solid 1px",
                                boxSizing: "border-box",
                                padding: "1%",
                                borderRadius: "6px"
                            }}
                        >
                            {description}
                        </AccordionComponent>
                    } */}
                </MetaDiv>
            </ContentDiv>
        </Parent>
    );
}