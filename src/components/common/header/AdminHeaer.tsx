import { Outlet } from "react-router-dom";
import * as S from "../../../styles/adminHeader";

const AdminHeader = () => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo src="image/headerLogo.png" alt="header logo" />
        <S.AdminMark>admin page</S.AdminMark>
      </S.Header>
      <Outlet />
    </>
  );
};

export default AdminHeader;
