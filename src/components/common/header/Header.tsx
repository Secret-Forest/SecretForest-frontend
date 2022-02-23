import { Outlet } from "react-router-dom";
import headerLogo from "../../../assets/img/headerLogo.png";
import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo src={headerLogo} alt="header logo" />
      </S.Header>
      <Outlet />
    </>
  );
};

export default Header;
