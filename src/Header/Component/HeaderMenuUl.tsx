import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHeaderMenuUl } from "../Hook/useHeaderMenuUl";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";


const NavUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 70%;
`;

const NavLi = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 1%;
  box-sizing: border-box;
  background: ${({ isActive }) => (isActive ? "radial-gradient(50% 50% at 50% 0, rgba(var(--action-background-color,255,255,255),.8) 0, transparent 100%), hsla(0, 0%, 100%, .2);" : "")};
  box-shadow: ${({ isActive }) => (isActive ? "0 -4px 16px 0 rgba(var(--action-background-color,255,255,255),.2)" : "")};
  border-radius: 7%;
  font-weight:400;
  font-size: 19px;
  color:white;
  margin-right:3%;
  cursor:pointer;
  &:hover {
     color: black;
     background-color: white;
  }
`;

export function HeaderMenuUl() {

    console.log(`HeaderMenuUl render`);

    const {
        nowPath,
        isLogin } = useHeaderMenuUl();

    return (
        <NavUl>
            <NavLi
                isActive={nowPath === ROUTER_PATH.HOME}
            >
                <Link
                    to={ROUTER_PATH.HOME}
                    style={{ color: "inherit", fontWeight: "inherit" }}
                >
                    ホーム
                </Link>
            </NavLi>
            {
                isLogin &&
                <NavLi
                    isActive={nowPath === ROUTER_PATH.FAVORITE}
                >
                    <Link
                        to={ROUTER_PATH.FAVORITE}
                        style={{ color: "inherit", fontWeight: "inherit" }}
                    >
                        お気に入り
                    </Link>
                </NavLi>
            }
        </NavUl>
    );
}