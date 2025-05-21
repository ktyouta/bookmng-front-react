import React from "react";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { MdPlayArrow } from 'react-icons/md';
import { IconComponent } from "../../Common/Component/IconComponent";
import { useHomeBookDetailInfo } from "../Hook/useHomeBookDetailInfo";
import type { BookDetailItemType } from "../Type/BookDetailItemType";
import { FLG } from "../../Common/Const/CommonConst";

const BookInfoDiv = styled.div`
  width: 25%;
`;

const BookImg = styled.img`
    width: 92%;
    height: 325px;
    border-radius: 6%;
`;

const BookMetaDiv = styled.div`
`;

const BookTitle = styled.h3`
`;

const BtnDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;


type propsType = {
    bookDetail: BookDetailItemType | undefined,
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
                                    // お気に入り登録済み
                                    <ButtonComponent
                                        styleTypeNumber="BASE"
                                        title={"お気に入り登録済み"}
                                        onclick={() => { }}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "height": "50px",
                                            "width": "90%",
                                            "background": "rgb(100, 100, 100)",
                                            "color": "white",
                                            "borderRadius": "0",
                                        }}
                                    />
                                    :
                                    // お気に入り未登録
                                    <ButtonComponent
                                        styleTypeNumber="BASE"
                                        title={"お気に入りに登録する"}
                                        onclick={addToFavorite}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "height": "50px",
                                            "width": "90%",
                                            "background": "#ff9f00",
                                            "color": "white",
                                            "borderRadius": "0",
                                        }}
                                    />
                            }
                        </React.Fragment>
                        :
                        // ログイン画面遷移ボタン
                        <ButtonComponent
                            styleTypeNumber="BASE"
                            title={"ログインしてお気に入りに登録"}
                            onclick={moveLogin}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "50px",
                                "width": "90%",
                                "background": "rgb(30, 90, 170)",
                                "color": "white",
                                "borderRadius": "0",
                            }}
                        />
                }
            </BookMetaDiv>
        </BookInfoDiv>
    );
}