import React from "react";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { MdPlayArrow } from 'react-icons/md';
import { IconComponent } from "../../Common/Component/IconComponent";
import { useHomeBookDetailInfo } from "../Hook/useHomeBookDetailInfo";
import type { BookDetailType } from "../Type/BookDetailType";
import { FLG } from "../../Common/Const/CommonConst";
import type { GoogleBooksDetailResponseType } from "../Type/GoogleBooksDetailResponseType";

const BookInfoDiv = styled.div`
  width: 25%;
`;

const BookImg = styled.img`
    width: 85%;
    height: 355px;
    border-radius: 6%;
`;

const BookMetaDiv = styled.div`
`;

const BookTitle = styled.h3`
    margin-bottom: 12%;
`;

const BtnDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;


type propsType = {
    bookDetail: BookDetailType | undefined,
}


export function HomeBookDetailInfo(props: propsType) {

    console.log("HomeBookDetailInfo render");

    const {
        addToFavorite,
        isLogin,
        moveLogin,
    } = useHomeBookDetailInfo();

    const bookDetail = props.bookDetail;
    const item = bookDetail;
    const volumeInfo = item?.volumeInfo;
    // サムネイルURL
    const imgUrl = volumeInfo?.imageLinks?.thumbnail;
    // タイトル
    const title = volumeInfo?.title;
    // お気に入りフラグ
    const favoriteFlg = item?.favoriteFlg;

    return (
        <BookInfoDiv>
            <BookImg
                src={imgUrl}
            />
            <BookMetaDiv>
                <BookTitle>
                    {title}
                </BookTitle>
                {
                    isLogin ?
                        <React.Fragment>
                            {
                                favoriteFlg === FLG.ON
                                    ?
                                    // 本棚登録済み
                                    <ButtonComponent
                                        styleTypeNumber="BASE"
                                        title={"本棚に登録済み"}
                                        onclick={() => { }}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "height": "50px",
                                            "width": "90%",
                                            "background": "rgb(100, 100, 100)",
                                            "color": "white",
                                            "borderRadius": "8px",
                                        }}
                                    />
                                    :
                                    // 本棚未登録
                                    <ButtonComponent
                                        styleTypeNumber="BASE"
                                        title={"本棚に登録する"}
                                        onclick={addToFavorite}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "height": "50px",
                                            "width": "90%",
                                            "background": "#ff9f00",
                                            "color": "white",
                                            "borderRadius": "8px",
                                        }}
                                    />
                            }
                        </React.Fragment>
                        :
                        // ログイン画面遷移ボタン
                        <ButtonComponent
                            styleTypeNumber="BASE"
                            title={"ログインして本棚に登録"}
                            onclick={moveLogin}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "50px",
                                "width": "90%",
                                "background": "rgb(30, 90, 170)",
                                "color": "white",
                                "borderRadius": "8px",
                            }}
                        />
                }
            </BookMetaDiv>
        </BookInfoDiv>
    );
}