import React from "react";
import styled from "styled-components";
import { useHomeBookContent } from "../Hook/useHomeBookContent";
import type { BookListItemType } from "../Type/BookListItemType";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaStar } from "react-icons/fa";
import { FLG } from "../../Common/Const/CommonConst";
import type { GoogleBooksAPIsModelItemsType } from "../Type/GoogleBooksAPIsModelItemsType";
import { FaBook } from 'react-icons/fa';


const BookArticle = styled.article`
    width: 71%;
`;

const BookSection = styled.section`
    width:100%;
    height:100%;
`;

const BookImg = styled.img`
    width:100%;
    height:100%;
    border-radius: 6%;
    cursor:pointer;
`;

const BookImgAreaDiv = styled.div`
    width:100%;
    font-size: 16px;
    position:relative;
`;

const BookTitleDiv = styled.div`
    cursor:pointer;
    font-size: 13px;
`;

const DateDiv = styled.div`
    font-size: 11px;
`;

const TmpImgDiv = styled.div`
    height:144px;
    cursor:pointer;
    box-sizing: border-box;
    padding-top: 14px;
`;


type propsType = {
    data: GoogleBooksAPIsModelItemsType,
}

export function HomeBookContent(props: propsType) {

    console.log("HomeBookContent render");

    const { clickBook } = useHomeBookContent();

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
    // お気に入りフラグ
    //const favoriteFlg = data.favoriteFlg;

    return (
        <BookArticle>
            <BookSection>
                {
                    imgUrl ?
                        <BookImgAreaDiv>
                            <BookImg
                                src={imgUrl}
                                onClick={() => {
                                    clickBook(bookId)
                                }}
                            />
                            {/* favoriteFlg === FLG.ON &&
                            // お気に入りアイコン
                            <HomeBookContentFavoriteIconArea /> */}
                        </BookImgAreaDiv>
                        :
                        <TmpImgDiv
                            onClick={() => {
                                clickBook(bookId)
                            }}
                        >
                            <IconComponent
                                icon={FaBook}
                                size="100"
                                style={{
                                    "color": "gray"
                                }}
                            />
                        </TmpImgDiv>
                }
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
            </BookSection>
        </BookArticle>
    );
}