import React from "react";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { MdPlayArrow } from 'react-icons/md';
import { IconComponent } from "../../Common/Component/IconComponent";
import { FLG } from "../../Common/Const/CommonConst";
import { FaBook } from 'react-icons/fa';
import { useBookshelfBookDetailInfo } from "../Hook/useBookshelfBookDetailInfo";
import type { BookshelfBookDetailMergedType } from "../Type/BookshelfBookDetailMergedType";


const BookInfoDiv = styled.div`
  width: 18%;
  padding-top: 3%;
`;

const BookImg = styled.img`
    width: 89%;
    border-radius: 6%;
`;

const BookMetaDiv = styled.div`
`;

const BookTitle = styled.h3`
    margin-bottom: 12%;
`;

const TmpImgDiv = styled.div`
    height:306px;
    box-sizing: border-box;
    padding-top: 14px;
`;

type propsType = {
    bookDetail: BookshelfBookDetailMergedType | undefined,
}

export function BookshelfBookDetailInfo(props: propsType) {

    console.log("HomeBookDetailInfo render");

    const { } = useBookshelfBookDetailInfo();

    const bookDetail = props.bookDetail;
    const item = bookDetail;
    const volumeInfo = item?.volumeInfo;
    // サムネイルURL
    const imgUrl = volumeInfo?.imageLinks?.thumbnail;
    // タイトル
    const title = volumeInfo?.title;

    return (
        <BookInfoDiv>
            {
                imgUrl
                    ?
                    <BookImg
                        src={imgUrl}
                    />
                    :
                    <TmpImgDiv>
                        <IconComponent
                            icon={FaBook}
                            size="70%"
                            style={{
                                "color": "gray"
                            }}
                        />
                    </TmpImgDiv>
            }
            <BookMetaDiv>
                <BookTitle>
                    {title}
                </BookTitle>
            </BookMetaDiv>
        </BookInfoDiv>
    );
}