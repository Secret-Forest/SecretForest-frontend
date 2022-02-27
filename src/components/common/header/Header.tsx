import { Link, Outlet } from "react-router-dom";
import * as S from "../../../styles/header";
import logo from "../../../assets/image/headerLogo.png";

const Header = () => {
  return (
    <>
      <S.Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.HeaderLogo src={logo} alt="header logo" />
        </Link>
      </S.Header>
      <Outlet />
    </>
  );
};

export default Header;
