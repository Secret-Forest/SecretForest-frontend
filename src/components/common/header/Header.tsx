import headerLogo from "../../../assets/img/headerLogo.png";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo src={headerLogo} alt="header logo" />
    </S.Header>
  );
};

export default Header;
