import * as S from "./styled";

const WritePost = () => {
  return (
    <S.WritePostPage>
      <S.PostInfo>
        <div>
          <S.InfoInput placeholder="닉네임을 입력해주세요" />
          <S.InfoInput placeholder="비밀번호를 입력해주세요" />
          <S.InfoInput placeholder="비밀번호를 다시 입력해주세요" />
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
