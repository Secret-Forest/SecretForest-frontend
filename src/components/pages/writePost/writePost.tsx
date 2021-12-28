import { useRef } from "react";
import * as S from "./styled";

const WritePost = () => {
  const nickNameRef = useRef<HTMLInputElement>(null);
  const PWRef = useRef<HTMLInputElement>(null);
  const PWCheckRef = useRef<HTMLInputElement>(null);

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
          <button>저장하기</button>
        </S.ButtonBar>
      </S.WritePost>
    </S.WritePostPage>
  );
};

export default WritePost;
