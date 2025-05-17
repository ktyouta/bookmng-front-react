import styled from "styled-components";
import { useException } from "../Hook/useException";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const HomeLinkSpan = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-size: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

const MainAreaDiv = styled.div`
  height:87%;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessageAreaDiv = styled.div`
`;

const ErrorMessageDiv = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const NavAreaDiv = styled.div`
  height:13%;
  display:flex;
  align-items: center;
  justify-content: center;
  grid-column-gap: 6px;
  color: #007bff;
`;

export function Exception() {

  const { backHome } = useException();

  return (
    <Parent>
      <MainAreaDiv>
        <ErrorMessageAreaDiv>
          <FaExclamationTriangle size={30} />
          <ErrorMessageDiv>
            エラーが発生しました
          </ErrorMessageDiv>
          <p>
            ホームに戻るか、時間をおいて再試行してください。
          </p>
        </ErrorMessageAreaDiv>
      </MainAreaDiv>
      <NavAreaDiv>
        <FaHome size={20} />
        <HomeLinkSpan onClick={backHome}>
          ホームに戻る
        </HomeLinkSpan>
      </NavAreaDiv>
    </Parent>
  );
};