import headerLogo from "../../../../assets/img/headerLogo.png";
import * as S from "./style";

const AdminHeader = () => {
  return (
    <S.Header>
      <S.HeaderLogo src={headerLogo} alt="header logo" />
      <S.AdminMark>admin page</S.AdminMark>
    </S.Header>
  );
};

export default AdminHeader;
