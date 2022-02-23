import { useRef } from "react";
import Swal from "sweetalert2";
import Request from "../../../api/axios";
import * as S from "./styled";

const WritePost = () => {
  interface submitDataType {
    writer: string | undefined;
    password: string | undefined;
    PWCheck?: string | undefined;
    title: string | undefined;
    content: string | undefined;
  }

  const nickNameRef = useRef<HTMLInputElement>(null);
  const PWRef = useRef<HTMLInputElement>(null);
  const PWCheckRef = useRef<HTMLInputElement>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const contextRef = useRef<HTMLTextAreaElement>(null);

  const checkInput = (submitData: submitDataType) => {
    const { writer, password, PWCheck, title, content } = submitData;
    if (!writer) {
      Swal.fire({
        title: "닉네임을 입력하세요!",
        icon: "error",
        allowOutsideClick: false,
      });
      return false;
    }

    if (writer.length < 2) {
      Swal.fire({
        title: "닉네임이 너무 짧습니다!",
        text: "최소 2글자",
        icon: "error",
        allowOutsideClick: false,
      });
      return false;
    }

    if (!password || !PWCheck) {
      Swal.fire({
        title: "비밀번호를 설정해주세요!",
        icon: "error",
        allowOutsideClick: false,
      });
      return false;
    }

    if (password.length < 6) {
      Swal.fire({
        title: "비밀번호가 너무 짧습니다!",
        text: "최소 6글자",
        icon: "error",
        allowOutsideClick: false,
      });
      return false;
    }

    if (password !== PWCheck) {
      Swal.fire({
        title: "비밀번호가 같지 않습니다!",
        icon: "error",
        allowOutsideClick: false,
      }).then(() => {
        PWCheckRef.current?.focus();
      });
      return false;
    }

    if (!title || !content) {
      Swal.fire({
        title: "제목과 내용 모두 입력하세요!",
        icon: "error",
        allowOutsideClick: false,
      });
      return false;
    }
    return true;
  };

  const submit = () => {
    const writer = nickNameRef.current?.value;
    const password = PWRef.current?.value;
    const PWCheck = PWCheckRef.current?.value;

    const title = titleRef.current?.value;
    const content = contextRef.current?.value;

    const submitData: submitDataType = {
      content,
      password,
      title,
      writer,
    };

    if (checkInput({ ...submitData, PWCheck }) === false) {
      return null;
    } else {
      console.log(submitData);
      Request("board", "post", submitData);
    }
  };

  type eventType = React.KeyboardEvent<HTMLInputElement>;
  type refType =
    | React.RefObject<HTMLInputElement>
    | React.RefObject<HTMLTextAreaElement>;

  const EnterKey = (e: eventType, Ref: refType) => {
    if (e.key === "Enter") {
      Ref.current?.focus();
    }
  };

  return (
    <S.WritePostPage>
      <S.PostInfo>
        <div>
          <S.InfoInput
            ref={nickNameRef}
            placeholder="닉네임"
            maxLength={15}
            onKeyPress={(e) => EnterKey(e, PWRef)}
          />
          <S.InfoInput
            ref={PWRef}
            placeholder="비밀번호"
            maxLength={20}
            onKeyPress={(e) => EnterKey(e, PWCheckRef)}
          />
          <S.InfoInput
            ref={PWCheckRef}
            placeholder="비밀번호 확인"
            maxLength={20}
          />
        </div>
      </S.PostInfo>
      <S.WritePost>
        <S.InputDiv>
          <S.Label>제목</S.Label>
          <S.TitleInput
            ref={titleRef}
            maxLength={100}
            onKeyPress={(e) => EnterKey(e, contextRef)}
          />
        </S.InputDiv>
        <S.InputDiv>
          <S.Label>내용</S.Label>
          <S.ContextInput ref={contextRef} maxLength={2000} />
        </S.InputDiv>
        <S.ButtonBar>
          <button onClick={submit}>저장하기</button>
        </S.ButtonBar>
      </S.WritePost>
    </S.WritePostPage>
  );
};

export default WritePost;
