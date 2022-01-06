import { useRef } from "react";
import swal from "sweetalert";
import * as S from "./style";

const Login = () => {
  const idRef: React.RefObject<HTMLInputElement> = useRef(null);
  const pwRef: React.RefObject<HTMLInputElement> = useRef(null);

  const submit = () => {
    const id: string | undefined = idRef.current?.value;
    const pw = pwRef.current?.value;
    if (!id || !pw) {
      swal({
        title: "ID와 PW를 모두 입력하세요!",
        icon: "warning",
        closeOnClickOutside: false,
      });
      return null;
    }

    if (id.length > 20 || pw.length > 20) {
      swal({
        icon: "error",
        title: "비정상적인 입력이 감지되었습니다!!!",
        closeOnClickOutside: false,
      });
      return null;
    }

    swal({
      icon: "success",
      title: "환영합니다",
      closeOnClickOutside: false,
    });
  };

  return (
    <S.LoginPage>
      <S.InputGlub>
        <S.LoginInput
          ref={idRef}
          maxLength={20}
          type="text"
          placeholder="Enter your ID"
        />
        <S.LoginInput
          ref={pwRef}
          maxLength={20}
          type="password"
          placeholder="Enter your PW"
        />
      </S.InputGlub>
      <S.LoginBtn onClick={submit}>로그인</S.LoginBtn>
    </S.LoginPage>
  );
};

export default Login;
