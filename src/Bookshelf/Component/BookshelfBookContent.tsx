import React from "react";
import styled from "styled-components";
import type { BookshelfBookListMergedType } from "../Type/FavoriteVideoListMergedType";
import { useBookshelfBookContent } from "../Hook/useBookshelfBookContent";

const BookArticle = styled.article`
`;

const BookSection = styled.section`
    width:100%;
`;

const BookImg = styled.img`
    width:100%;
    border-radius: 6%;
    cursor:pointer;
`;

const BookTitleDiv = styled.div`
    color:white;
    cursor:pointer;
    font-size: 14px;
`;

const DateDiv = styled.div`
    font-size: 11px;
`;

const ChennelTitleDiv = styled.div`
    font-size: 11px;
`;


type propsType = {
    data: BookshelfBookListMergedType,
}

export function BookshelfBookContent(props: propsType) {

    console.log("BookshelfBookContent render");

    const { clickBook } = useBookshelfBookContent();

    const data = props.data
    const snipet = data.snippet;
    // 書籍タイトル
    const title = snipet.title;
    // サムネイルURL
    const imgUrl = snipet.thumbnails.high?.url;
    // チャンネル名
    const channelTitle = snipet.channelTitle;
    // 書籍ID
    const bookId = data.id ?? ``;
    // 日付
    const dateList = snipet.publishedAt.split("T");
    const publishedDate = dateList.length > 0 ? dateList[0] : ``;

    return (
        <BookArticle>
            <BookSection>
                <BookImg
                    src={imgUrl}
                    onClick={() => {
                        clickBook(bookId)
                    }}
                />
                <BookTitleDiv
                    onClick={() => {
                        clickBook(bookId)
                    }}
                >
                    {title}
                </BookTitleDiv>
                <DateDiv>
                    {publishedDate}
                </DateDiv>
                <ChennelTitleDiv>
                    {channelTitle}
                </ChennelTitleDiv>
            </BookSection>
        </BookArticle>
    );
}