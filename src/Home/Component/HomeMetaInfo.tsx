import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import type { GoogleBooksDetailResponseType } from "../Type/GoogleBooksDetailResponseType";
import parse from "html-react-parser";


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
`;

const AuthorDiv = styled.div`
  display: flex;
  text-align: center;
  width: auto;
  align-items: center;
`;


type propsType = {
    bookId: string,
    bookDetail: GoogleBooksDetailResponseType | undefined,
}

export function HomeMetaInfo(props: propsType) {

    console.log("HomeMetaInfo render");

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
    const description = parse(volumeInfo?.description ?? ``);
    // ページ数
    const pageCount = volumeInfo?.pageCount;

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
                    【著者名】
                </TitleDiv>
                <MetaDiv>
                    {
                        authors?.map((e: string) => {
                            return (
                                <AuthorDiv
                                    key={e}
                                >
                                    {e}
                                </AuthorDiv>
                            )
                        })
                    }
                </MetaDiv>
                <TitleDiv>
                    【出版社】
                </TitleDiv>
                <MetaDiv>
                    {publisher}
                </MetaDiv>
                <TitleDiv>
                    【出版日】
                </TitleDiv>
                <MetaDiv>
                    {publishedDate}
                </MetaDiv>
                <TitleDiv>
                    【ページ数】
                </TitleDiv>
                <MetaDiv>
                    {pageCount}
                </MetaDiv>
                <TitleDiv>
                    【あらすじ】
                </TitleDiv>
                <MetaDiv>
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
                </MetaDiv>
            </ContentDiv>
        </Parent>
    );
}