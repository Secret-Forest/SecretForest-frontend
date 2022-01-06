import * as S from "./style";

const Login = () => {
  return (
    <S.LoginPage>
      <S.InputGlub>
        <S.LoginInput type="text" placeholder="Enter your ID" />
        <S.LoginInput type="password" placeholder="Enter your PW" />
      </S.InputGlub>
      <S.LoginBtn>로그인</S.LoginBtn>
    </S.LoginPage>
  );
};

export default Login;
