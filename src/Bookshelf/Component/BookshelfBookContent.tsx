import React from "react";
import styled from "styled-components";
import type { BookshelfBookListMergedType } from "../Type/BookshelfBookListMergedType";
import { useBookshelfBookContent } from "../Hook/useBookshelfBookContent";

const BookArticle = styled.article`
`;

const BookSection = styled.section`
    width:71%;
`;

const BookImg = styled.img`
    width:100%;
    border-radius: 6%;
    cursor:pointer;
`;

const BookTitleDiv = styled.div`
    cursor:pointer;
    font-size: 14px;
`;

const DateDiv = styled.div`
    font-size: 11px;
`;

const AuthorDiv = styled.div`
    font-size: 11px;
`;


type propsType = {
    data: BookshelfBookListMergedType,
}

export function BookshelfBookContent(props: propsType) {

    console.log("BookshelfBookContent render");

    const { clickBook } = useBookshelfBookContent();

    const data = props.data
    const volumeInfo = data.volumeInfo;
    // 書籍タイトル
    const title = volumeInfo.title;
    // サムネイルURL
    const imgUrl = volumeInfo.imageLinks?.thumbnail;
    // 書籍ID
    const bookId = data.id ?? ``;
    // 日付
    const dateList = volumeInfo.publishedDate?.split("T");
    const publishedDate = dateList && dateList.length > 0 ? dateList[0] : ``;
    // 著者
    const authors = volumeInfo.authors;

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
                {
                    authors && authors.length > 0 &&
                    authors.map((e: string, index) => {
                        return (
                            <AuthorDiv
                                key={index}
                            >
                                {e}
                            </AuthorDiv>
                        )
                    })
                }
            </BookSection>
        </BookArticle>
    );
}