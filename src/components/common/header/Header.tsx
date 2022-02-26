import { Link, Outlet } from "react-router-dom";
import * as S from "../../../styles/header";

const Header = () => {
  return (
    <>
      <S.Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.HeaderLogo src="image/headerLogo.png" alt="header logo" />
        </Link>
      </S.Header>
      <Outlet />
    </>
  );
};

export default Header;
