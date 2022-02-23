import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import * as S from "./style";

const Login = () => {
  const idRef: React.RefObject<HTMLInputElement> = useRef(null);
  const pwRef: React.RefObject<HTMLInputElement> = useRef(null);

  axios
    .request({
      method: "post",
      url: "http://13.209.58.38:8080/admin/auth/login",
      data: {
        adminId: "admin",
        password: "adminpassword",
      },
    })
    .then((res) => {
      console.log(res);
    });

  const submit = () => {
    const id: string | undefined = idRef.current?.value;
    const pw = pwRef.current?.value;
    if (!id || !pw) {
      Swal.fire({
        title: "ID와 PW를 모두 입력하세요!",
        icon: "warning",
        allowOutsideClick: false,
      });
      return null;
    }

    if (id.length > 20 || pw.length > 20) {
      Swal.fire({
        icon: "error",
        title: "비정상적인 입력이 감지되었습니다!!!",
        allowOutsideClick: false,
      });
      return null;
    }

    Swal.fire({
      icon: "success",
      title: "환영합니다",
      allowOutsideClick: false,
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
