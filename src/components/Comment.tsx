import { useState } from "react";
import Swal, { SweetAlertResult } from "sweetalert2";
import Request from "../api/axios";
import { commentArrayType } from "../interface/showPost";
import * as S from "../styles/showPostComment";
import report from "../assets/image/report.png";

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
  writer: string;
  password: string;
  comment: string;
}

const Comment = ({ commentData, id, getData }: props) => {
  const randomColor = (): colorObj => {
    const color: colorObj = {
      R: Math.floor(Math.random() * 256),
      G: Math.floor(Math.random() * 256),
      B: Math.floor(Math.random() * 256),
    };

    return color;
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

      if (!commentWriter || !commentPassword) {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: "top-end",
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          text: `이름과 비밀번호를 모두 설정해야만 댓글을 작성할 수 있습니다!!`,
          icon: "error",
        });
        return;
      }
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

  const onReport = (id: number) => {
    Request(`report/comment/${id}`, "put");
  };

  return (
    <S.CommentBar>
      <S.Over>
        {commentData.map((comment: commentArrayType, index: number) => (
          <S.Comment key={index}>
            <div>
              <S.Profile profileColor={randomColor()}></S.Profile>
              <S.NickName>{comment?.writer}</S.NickName>
              <S.Report
                src={report}
                onClick={() => onReport(comment.id)}
                alt="comment report"
              />
            </div>
            <S.CommnetData>{comment?.comment}</S.CommnetData>
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
