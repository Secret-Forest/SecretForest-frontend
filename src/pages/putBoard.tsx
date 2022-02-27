import * as S from "../styles/putBoard";
import Swal, { SweetAlertResult } from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Request } from "../api/axios";
import {
  NavigateFunction,
  Params,
  useNavigate,
  useParams,
} from "react-router-dom";

interface boardDataType {
  title: string;
  content: string;
}

const PutPost = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const [boardData, setBoardData] = useState<boardDataType>({
    title: "",
    content: "",
  });
  const navigate: NavigateFunction = useNavigate();

  const certification = async () => {
    const { value }: SweetAlertResult<string> = await Swal.fire({
      title: "비밀번호를 입력하세요",
      allowOutsideClick: false,
      input: "text",
    });

    const res = await Request(`match/post/${id}`, "post", { password: value });

    if (res.status !== 200) {
      navigate(`../${id}`);
    }
  };

  useEffect(() => {
    certification();
    getData();
  }, []);

  const getData = async () => {
    await Request(`board/${id}`, "get").then(({ data }) => {
      const { title, content } = data;

      setBoardData({ title, content });
    });
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

  const onSave = () => {
    Request(`board/${id}`, "put", boardData);
    navigate("/");
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardData({ ...boardData, title: e.target.value });
  };
  const onContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBoardData({ ...boardData, content: e.target.value });
  };

  return (
    <S.ShowPage>
      <S.Post>
        <S.TitleBar>
          <S.TitleDiv>
            <S.Title value={boardData.title} onChange={onTitleChange} />
          </S.TitleDiv>
          <S.BtnBar>
            <button onClick={onSave}>저장</button>
            <button onClick={onDelete}>삭제</button>
          </S.BtnBar>
        </S.TitleBar>
        <S.PostContext value={boardData.content} onChange={onContextChange} />
      </S.Post>
    </S.ShowPage>
  );
};

export default PutPost;
