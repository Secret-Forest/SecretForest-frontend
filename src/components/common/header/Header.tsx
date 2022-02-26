import { Outlet } from "react-router-dom";
import * as S from "../../../styles/header";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo src="image/headerLogo.png" alt="header logo" />
      </S.Header>
      <Outlet />
    </>
  );
};

export default Header;
