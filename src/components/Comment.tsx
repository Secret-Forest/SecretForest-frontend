import { useState } from "react";
import Swal, { SweetAlertResult } from "sweetalert2";
import Request from "../api/axios";
import { commentArrayType } from "../interface/showPost";
import * as S from "../styles/showPostComment";

interface props {
  commentData: commentArrayType[];
  id: string;
  getData: () => void;
}

interface colorObj {
  R: number;
  G: number;
  B: number;
}

interface commentWriterDataType {
  writer: string | undefined;
  password: string | undefined;
  comment: string;
}

const Comment = ({ commentData, id, getData }: props) => {
  const color: colorObj = {
    R: Math.floor(Math.random() * 256),
    G: Math.floor(Math.random() * 256),
    B: Math.floor(Math.random() * 256),
  };

  const [comment, setComment] = useState<string>("");

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(e.target.value);
  };

  const onSubmitComment = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const { value: commentWriter }: SweetAlertResult<string> =
        await Swal.fire({
          title: "표시될 이름을 입력하세요",
          input: "text",
          allowOutsideClick: false,
        });

      const { value: commentPassword }: SweetAlertResult<string> =
        await Swal.fire({
          title: "비밀번호를 설정해주세요",
          input: "password",
          allowOutsideClick: false,
        });

      const commentWriterData: commentWriterDataType = {
        writer: commentWriter,
        password: commentPassword,
        comment,
      };

      Request(`comment/${id}`, "post", commentWriterData).then(() => {
        getData();
      });
    }
  };

  return (
    <S.CommentBar>
      <S.Over>
        {commentData.map((CommentArray: commentArrayType, index: number) => (
          <S.Comment key={index}>
            <div>
              <S.Profile profileColor={color}></S.Profile>
              <S.NickName>{CommentArray?.writer}</S.NickName>
            </div>
            <S.CommnetData>{CommentArray?.comment}</S.CommnetData>
          </S.Comment>
        ))}
      </S.Over>
      <S.CommentInput
        value={comment}
        onChange={changeComment}
        onKeyPress={onSubmitComment}
      />
    </S.CommentBar>
  );
};

export default Comment;
