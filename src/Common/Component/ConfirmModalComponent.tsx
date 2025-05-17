import styled from "styled-components";
import { useConfirmModalComponent } from "../Hook/useConfirmModalComponent";
import ModalComponent from "./ModalComponent";
import { FlexSpaceDiv } from "../StyledComponent/FlexSpaceDiv";
import { IconComponent } from "./IconComponent";
import ButtonComponent from "./ButtonComponent";
import React from "react";
import { OverlayDiv } from "../StyledComponent/OverlayDiv";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
`;

//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 1%;
  height:65%;
`;

const TitleSpan = styled.div`
  font-size:14px;
`;

const BtnAreaDiv = styled.div`
    width: 100%;
    height: 36%;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
`;

type propsType = {
    isOpenModal: boolean,
    closeModal: () => void,
    titleMessage: string,
    clickOk: () => void,
}


export function ConfirmModalComponent(props: propsType) {


    return (
        <React.Fragment>
            {
                props.isOpenModal &&
                <ModalComponent
                    modalIsOpen={props.isOpenModal}
                    closeModal={props.closeModal}
                    style={{
                        backgroundColor: "#e0e0e0",
                        borderRadius: "20px",
                        border: "solid 1px",
                        color: "black",
                    }}
                    width="26%"
                    height="25%"
                    positionTop="32%"
                    positionLeft="35%"
                >
                    <Parent>
                        <HeaderDiv>
                            <TitleSpan>
                                {props.titleMessage}
                            </TitleSpan>
                            <FlexSpaceDiv />
                        </HeaderDiv>
                        <BtnAreaDiv>
                            <ButtonComponent
                                styleTypeNumber="RUN"
                                title={"キャンセル"}
                                onclick={props.closeModal}
                                style={{
                                    "borderRadius": "23px",
                                    "background": "black",
                                    "fontSize": "1rem",
                                }}
                            />
                            <ButtonComponent
                                styleTypeNumber="RUN"
                                title={"OK"}
                                onclick={props.clickOk}
                                style={{
                                    "borderRadius": "23px",
                                    "background": "black",
                                    "fontSize": "1rem",
                                    "marginLeft": "5%",
                                }}
                            />
                        </BtnAreaDiv>
                    </Parent>
                </ModalComponent>
            }
            {
                props.isOpenModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}