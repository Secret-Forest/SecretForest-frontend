import * as S from "./styled";
// import report from "../../../assets/image/report.png";
import Swal, { SweetAlertResult } from "sweetalert2";
import { useEffect, useState } from "react";
import Request from "../../../api/axios";
import { Params, useParams } from "react-router-dom";

interface commentArrayType {
  id: number;
  comment: string;
  writer: string;
}

interface boardDataType {
  id: number;
  title: string;
  content: string;
  writer: string;
  commentsPostResponses: [commentArrayType];
}

const ShowPost = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const [boardData, setBoardData] = useState<boardDataType | null>(null);
  const [commentData, setCommentData] = useState<commentArrayType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Request(`board/${id}`, "get").then((res) => {
      // console.log(res);
      setBoardData(res);
      setCommentData(res.commentsPostResponses);
    });
  };
  const onPatch = async () => {
    const { value }: SweetAlertResult<string> = await Swal.fire({
      title: "비밀번호를 입력하세요",
      allowOutsideClick: false,
      input: "text",
    });

    const data = await Request(`match/post/${id}`, "post", { password: value });

    console.log(data === "");
  };

  const onDelete = () => {
    Swal.fire({
      title: "비밀번호를 입력하세요",
      input: "password",
      allowOutsideClick: false,
    }).then((PW: SweetAlertResult<any>) => {
      const { value }: { value?: string } = PW;
      if (value) {
        Request(`board/${id}`, "delete", { password: value });
      }
    });
  };

  const onReport = () => {
    Request(`report/board/${id}`, "put");
    const Toast = Swal.mixin({
      toast: true,
      showConfirmButton: false,
      position: "top-end",
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      text: "해당 게시물이 신고되었습니다",
      icon: "success",
    });
  };

  const [comment, setComment] = useState<string>("");
  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  interface commentWriterDataType {
    writer: string | undefined;
    password: string | undefined;
    comment: string;
  }

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
    <S.ShowPage>
      <S.Post>
        <S.TitleBar>
          <S.TitleDiv>
            <S.Title>{boardData?.title}</S.Title>
            <S.Writer>{boardData?.writer}</S.Writer>
          </S.TitleDiv>
          <S.BtnBar>
            <button onClick={onPatch}>수정</button>
            <button onClick={onDelete}>삭제</button>
            <img src="image/report.png" alt="신고 버튼" onClick={onReport} />
          </S.BtnBar>
        </S.TitleBar>
        <S.PostContext>{boardData?.content}</S.PostContext>
      </S.Post>
      <S.CommentBar>
        <S.Over>
          {commentData.map((Comment: commentArrayType, index: number) => {
            const color = {
              R: Math.floor(Math.random() * 256),
              G: Math.floor(Math.random() * 256),
              B: Math.floor(Math.random() * 256),
            };
            return (
              <S.Comment key={index}>
                <div>
                  <S.Profile profileColor={color}></S.Profile>
                  <S.NickName>{Comment?.writer}</S.NickName>
                </div>
                <S.CommnetData>{Comment?.comment}</S.CommnetData>
              </S.Comment>
            );
          })}
        </S.Over>
        <S.CommentInput
          value={comment}
          onChange={changeComment}
          onKeyPress={onSubmitComment}
        />
      </S.CommentBar>
    </S.ShowPage>
  );
};

export default ShowPost;
