import { Outlet } from "react-router-dom";
import * as S from "../../../styles/adminHeader";
import logo from "../../../assets/image/headerLogo.png";

const AdminHeader = () => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo src={logo} alt="header logo" />
        <S.AdminMark>admin page</S.AdminMark>
      </S.Header>
      <Outlet />
    </>
  );
};

export default AdminHeader;
