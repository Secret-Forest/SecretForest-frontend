import { Link, Outlet } from "react-router-dom";
import * as S from "../../../styles/header";
import logo from "../../../assets/image/headerLogo.png";
import edit from "../../../assets/image/edit.svg";
const Header = () => {
  return (
    <>
      <S.Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.HeaderLogo src={logo} alt="header logo" />
        </Link>
        <S.Write>
          <Link to="/write" style={{ textDecoration: "none" }}>
            <img src={edit} alt="write new post" />
          </Link>
        </S.Write>
      </S.Header>
      <Outlet />
    </>
  );
};

export default Header;
