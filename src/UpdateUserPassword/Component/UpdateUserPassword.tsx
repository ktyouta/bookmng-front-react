import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../Common/Const/CommonConst";
import { useUpdateUserPassword } from "../Hook/useUpdateUserPassword";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";


const Parent = styled.div`
  width: 100vw;
  background-color: #dcdcdc;
  height: 100vh;
`;

const FormDiv = styled.div`
    width: 40%;
    padding-left: 10%;
    padding-top: 8%;
`;

const FormButtonDiv = styled.div`
    margin-top: 9%;
`;

const TitleDiv = styled.div`
    font-size: 30px;
    margin-bottom: 8%;
`;

const ErrMessageDiv = styled.div`
    font-size: 15px;
    margin-bottom: 6%;
    color: red;
    white-space: pre-line;
`;

const InputRowDiv = styled.div`
`;

const InputTitleDiv = styled.div`
`;



export function UpdateUserPassword() {

    console.log("UpdateUserPassword render");

    const {
        currentPasswordRef,
        newPasswordRef,
        confirmPasswordRef,
        clickUpdateUserInfoBtn,
        errMessage,
        clickCancel,
        isOpenModal,
        closeModal,
        executeUpdate, } = useUpdateUserPassword();

    return (
        <Parent>
            <FormDiv>
                <TitleDiv>
                    パスワードの変更
                </TitleDiv>
                {
                    errMessage &&
                    <ErrMessageDiv>
                        {errMessage}
                    </ErrMessageDiv>
                }
                <InputRowDiv>
                    <InputTitleDiv>
                        現在のパスワード
                    </InputTitleDiv>
                    <BaseTextbox
                        value={``}
                        type="password"
                        length={30}
                        disabled={false}
                        ref={currentPasswordRef}
                        textWidth='98%'
                        placeholder='UserName'
                        autoComplete={true}
                        style={{ marginBottom: "8%" }}
                    />
                </InputRowDiv>
                <InputRowDiv>
                    <InputTitleDiv>
                        新しいパスワード(3～30文字)
                    </InputTitleDiv>
                    <BaseTextbox
                        value={``}
                        type="password"
                        length={30}
                        disabled={false}
                        ref={newPasswordRef}
                        textWidth='98%'
                        placeholder='UserName'
                        autoComplete={true}
                        style={{ marginBottom: "8%" }}
                    />
                </InputRowDiv>
                <InputRowDiv>
                    <InputTitleDiv>
                        確認用パスワード
                    </InputTitleDiv>
                    <BaseTextbox
                        value={``}
                        type="password"
                        length={30}
                        disabled={false}
                        ref={confirmPasswordRef}
                        textWidth='98%'
                        placeholder='UserName'
                        autoComplete={true}
                        style={{ marginBottom: "8%" }}
                    />
                </InputRowDiv>
                <FormButtonDiv>
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"キャンセル"}
                        onclick={clickCancel}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                        }}
                    />
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"保存"}
                        onclick={clickUpdateUserInfoBtn}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                            "marginLeft": "5%",
                        }}
                    />
                </FormButtonDiv>
            </FormDiv>
            <ConfirmModalComponent
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`入力した内容でパスワードを更新しますか？`}
                clickOk={executeUpdate}
            />
        </Parent>
    );
}