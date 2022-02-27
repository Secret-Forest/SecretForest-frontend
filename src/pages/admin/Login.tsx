import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Request } from "../../api/axios";
import * as S from "../../styles/login";

interface authObjType {
  readonly adminId: string;
  readonly password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const idRef: React.RefObject<HTMLInputElement> = useRef(null);
  const pwRef: React.RefObject<HTMLInputElement> = useRef(null);

  const validation = (id: string, pw: string): boolean => {
    if (!id || !pw) {
      Swal.fire({
        title: "ID와 PW를 모두 입력하세요!",
        icon: "warning",
        allowOutsideClick: false,
      });
      return false;
    }

    if (id.length > 20 || pw.length > 20) {
      Swal.fire({
        icon: "error",
        title: "비정상적인 입력이 감지되었습니다!!!",
        allowOutsideClick: false,
      });
      return false;
    }

    Swal.fire({
      icon: "success",
      title: "환영합니다",
      allowOutsideClick: false,
    });

    return true;
  };

  const submit = () => {
    console.log("submit");
    const id: string = idRef.current?.value ?? "";
    const pw: string = pwRef.current?.value ?? "";

    if (validation(id, pw)) {
      const authObj: authObjType = {
        adminId: id,
        password: pw,
      };

      Request("admin/auth/login", "post", authObj).then(({ data }) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      });

      navigate("/admin");
    }
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
