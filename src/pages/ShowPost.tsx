import * as S from "../styles/showPost";
import Swal, { SweetAlertResult } from "sweetalert2";
import { useEffect, useState } from "react";
import Request from "../api/axios";
import { Params, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import { commentArrayType } from "../interface/showPost";

import report from "../assets/image/report.png";

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

  const getData = (): void => {
    Request(`board/${id}`, "get").then(({ data }) => {
      setBoardData(data);
      setCommentData(data.commentsPostResponses);
    });
  };
  const onPatch = async () => {};

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
            <img src={report} alt="신고 버튼" onClick={onReport} />
          </S.BtnBar>
        </S.TitleBar>
        <S.PostContext>{boardData?.content}</S.PostContext>
      </S.Post>
      <Comment commentData={commentData} id={id ?? ""} getData={getData} />
    </S.ShowPage>
  );
};

export default ShowPost;
