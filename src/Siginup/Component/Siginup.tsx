import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { useSiginup } from "../Hook/useSiginup";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../Common/Const/CommonConst";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";


const Parent = styled.div`
  width: 100vw;
  background-color: #dcdcdc;
  height: 100vh;
`;

const SiginupFormDiv = styled.div`
    width: 40%;
    padding-left: 10%;
    padding-top: 8%;
`;

const SiginupButtonDiv = styled.div`
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

const BirthDayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:6%;
`;

const BirthDayLabelDiv = styled.div`
  margin-right:2px;
`;

const InputRowDiv = styled.div`
`;

const InputTitleDiv = styled.div`
`;



export function Siginup() {

  console.log("Siginup render");

  const {
    userNameRef,
    userPasswordRef,
    clickSiginupBtn,
    handleKeyPress,
    errMessage,
    userBirthdayYearRef,
    userBirthdayMonthRef,
    userBirthdayDayRef,
    yearCoomboList,
    clickBack,
    isOpenModal,
    closeModal,
    executeSiginup, } = useSiginup();

  return (
    <Parent>
      <SiginupFormDiv>
        <TitleDiv>
          アカウント作成
        </TitleDiv>
        {
          errMessage &&
          <ErrMessageDiv>
            {errMessage}
          </ErrMessageDiv>
        }
        <InputRowDiv>
          <InputTitleDiv>
            ユーザー名(3～30文字)
          </InputTitleDiv>
          <BaseTextbox
            value={""}
            length={30}
            disabled={false}
            ref={userNameRef}
            textWidth='98%'
            onKeyDown={handleKeyPress}
            placeholder='UserName'
            autoComplete={true}
            style={{ marginBottom: "8%" }}
          />
        </InputRowDiv>
        {
          yearCoomboList && yearCoomboList.length > 0 &&
          <InputRowDiv>
            <InputTitleDiv>
              生年月日
            </InputTitleDiv>
            <BirthDayDiv>
              <ComboComponent
                combo={yearCoomboList}
                initValue={yearCoomboList[0].value}
                width="68%"
                minWidth="8%"
                height="39px"
                ref={userBirthdayYearRef}
              />
              <BirthDayLabelDiv>
                年
              </BirthDayLabelDiv>
              <ComboComponent
                combo={MONTH_LIST}
                initValue={MONTH_LIST && MONTH_LIST.length > 0 ? MONTH_LIST[0].value : ``}
                width="68%"
                minWidth="8%"
                height="39px"
                ref={userBirthdayMonthRef}
              />
              <BirthDayLabelDiv>
                月
              </BirthDayLabelDiv>
              <ComboComponent
                combo={DAY_LIST}
                initValue={DAY_LIST && DAY_LIST.length > 0 ? DAY_LIST[0].value : ``}
                width="68%"
                minWidth="8%"
                height="39px"
                ref={userBirthdayDayRef}
              />
              日
            </BirthDayDiv>
          </InputRowDiv>
        }
        <InputRowDiv>
          <InputTitleDiv>
            パスワード(3～30文字)
          </InputTitleDiv>
          <BaseTextbox
            type={"password"}
            value={""}
            length={30}
            disabled={false}
            ref={userPasswordRef}
            textWidth='98%'
            onKeyDown={handleKeyPress}
            placeholder='Password'
            style={{ marginBottom: "8%" }}
          />
        </InputRowDiv>
        <SiginupButtonDiv>
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"戻る"}
            onclick={clickBack}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
            }}
          />
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"登録"}
            onclick={clickSiginupBtn}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
              "marginLeft": "5%",
            }}
          />
        </SiginupButtonDiv>
      </SiginupFormDiv>
      <ConfirmModalComponent
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        titleMessage={`入力した内容でアカウントを作成しますか？`}
        clickOk={executeSiginup}
      />
    </Parent>
  );
}