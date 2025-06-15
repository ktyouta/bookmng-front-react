import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import parse from "html-react-parser";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";


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

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 3%;
  display: flex;
  text-align: center;
  align-items: center;
`;

const DescriptionDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 3%;
`;


type propsType = {
    bookDetail: BookshelfBookDetailMergedType | undefined,
}

export function BookshelfMetaInfo(props: propsType) {

    console.log("BookshelfMetaInfo render");

    const bookDetail = props.bookDetail;
    // 書籍基本情報
    const volumeInfo = bookDetail?.volumeInfo;
    // タイトル
    const title = volumeInfo?.title;
    // 著者名
    const authors = volumeInfo?.authors;
    // 出版社
    const publisher = volumeInfo?.publisher;
    // 出版日
    const publishedDate = volumeInfo?.publishedDate;
    // あらすじ
    const description = volumeInfo?.description ? parse(volumeInfo?.description) : ``;
    // ページ数
    const pageCount = volumeInfo?.pageCount;
    // ISBN
    const isbn = volumeInfo?.industryIdentifiers;

    return (
        <Parent>
            <ContentDiv>
                <MetaDiv>
                    タイトル : {title}
                </MetaDiv>
                <MetaDiv>
                    著者 : {authors?.join(`,`)}
                </MetaDiv>
                <MetaDiv>
                    出版社 : {publisher}
                </MetaDiv>
                <MetaDiv>
                    出版日 : {publishedDate}
                </MetaDiv>
                <MetaDiv>
                    ページ数 : {pageCount}
                </MetaDiv>
                <MetaDiv>
                    ISBN : {isbn?.map((e) => e.identifier).join(`,`)}
                </MetaDiv>
                <TitleDiv>
                    あらすじ
                </TitleDiv>
                <DescriptionDiv>
                    {
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
                    }
                </DescriptionDiv>
            </ContentDiv>
        </Parent>
    );
}