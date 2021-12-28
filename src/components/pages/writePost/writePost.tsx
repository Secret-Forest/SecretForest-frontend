import { useRef } from "react";
import swal from "sweetalert";
import * as S from "./styled";

const WritePost = () => {
  const nickNameRef = useRef<HTMLInputElement>(null);
  const PWRef = useRef<HTMLInputElement>(null);
  const PWCheckRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    const nickName = nickNameRef.current?.value;
    const PW = PWRef.current?.value;
    const PWCheck = PWCheckRef.current?.value;

    if (!nickName) {
      swal({
        title: "닉네임을 입력하세요!",
        icon: "error",
      });
      return null;
    }

    if (PW !== PWCheck) {
      swal({
        title: "비밀번호가 같지 않습니다!!",
        icon: "error",
      }).then(() => {
        PWCheckRef.current?.focus();
      });
      return null;
    }

    if (1) {
      swal("good");
    }
  };

  return (
    <S.WritePostPage>
      <S.PostInfo>
        <div>
          <S.InfoInput ref={nickNameRef} placeholder="닉네임" />
          <S.InfoInput ref={PWRef} placeholder="비밀번호" />
          <S.InfoInput ref={PWCheckRef} placeholder="비밀번호 확인" />
        </div>
      </S.PostInfo>
      <S.WritePost>
        <S.InputDiv>
          <S.Label>제목</S.Label>
          <S.TitleInput />
        </S.InputDiv>
        <S.InputDiv>
          <S.Label>내용</S.Label>
          <S.ContextInput />
        </S.InputDiv>
        <S.ButtonBar>
          <button onClick={submit}>저장하기</button>
        </S.ButtonBar>
      </S.WritePost>
    </S.WritePostPage>
  );
};

export default WritePost;
