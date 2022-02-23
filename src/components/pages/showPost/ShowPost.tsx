import * as S from "./styled";
import report from "../../../assets/img/report.png";
import Swal, { SweetAlertResult } from "sweetalert2";
import { useEffect, useState } from "react";
import Request from "../../../api/axios";
import { Params, useParams } from "react-router-dom";

const commentTestData = [
  {
    id: 1,
    nickName: "자퇴각",
    text: "그렇구나 그럴 수 있지",
  },
  {
    id: 2,
    nickName: "눈 딱 감고",
    text: "말했잖아 언젠가 그런 날이 온다면 난 널 혼자 내버려 두지 않을거라고",
  },

  {
    id: 3,
    nickName: "나도 알아",
    text: `나의 문제가 무엇인지 난 못났고
별볼일 없지 그에가 나를 부끄러워 한다는게 슬프지만 내가 뭐라고
빛나는 누군갈 좋아하는 일에 기준이 있는거라면 이해할 순 없지만 할말 없는 난
안경 쓴 샌님이니까`,
  },
  {
    id: 4,
    nickName: "자퇴각",
    text: `그렇구나 
그럴 수 있지`,
  },
  {
    id: 5,
    nickName: "자퇴각",
    text: "그렇구나 그럴 수 있지",
  },
  {
    id: 6,
    nickName: "자퇴각",
    text: "그렇구나 그럴 수 있지",
  },
  {
    id: 7,
    nickName: "자퇴각",
    text: "그렇구나 그럴 수 있지",
  },
  {
    id: 8,
    nickName: "자퇴각",
    text: "그렇구나 그럴 수 있지",
  },
  {
    id: 9,
    nickName: "자퇴각",
    text: "그렇구나 그럴 수 있지",
  },
  {
    id: 10,
    nickName: "나도 알아",
    text: `나의 문제가 무엇인지 난 못났고
별볼일 없지 그에가 나를 부끄러워 한다는게 슬프지만 내가 뭐라고
빛나는 누군갈 좋아하는 일에 기준이 있는거라면 이해할 순 없지만 할말 없는 난
안경 쓴 샌님이니까`,
  },
];

interface boardDataType {
  id: number;
  title: string;
  content: string;
  writer: string;
  commentsPostResponses: [
    {
      id: number;
      comment: string;
      writer: string;
    }
  ];
}

const ShowPost = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const [boardData, setBoardData] = useState<boardDataType | null>(null);

  useEffect(() => {
    Request(`board/${id}`, "get").then((res) => {
      console.log(res);
      setBoardData(res);
    });
  }, []);

  const onPutch = () => {
    Swal.fire({
      title: "비밀번호를 입력하세요",
      allowOutsideClick: false,
      input: "text",
    }).then((PW: SweetAlertResult<any>) => {
      console.log(PW);
    });
  };

  const onDelete = () => {
    Swal.fire({
      title: "비밀번호를 입력하세요",
      input: "text",
      allowOutsideClick: false,
    }).then((PW: SweetAlertResult<any>) => {
      Request(`board/${id}`, "delete");
    });
  };

  const onReport = () => {
    Swal.fire({
      text: "해당 게시물이 신고되었습니다",
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
            <button onClick={onPutch}>수정</button>
            <button onClick={onDelete}>삭제</button>
            <img src={report} alt="신고 버튼" onClick={onReport} />
          </S.BtnBar>
        </S.TitleBar>
        <S.PostContext>{boardData?.content}</S.PostContext>
      </S.Post>
      <S.CommentBar>
        {commentTestData.map((Comment) => {
          const color = {
            R: Math.floor(Math.random() * 256),
            G: Math.floor(Math.random() * 256),
            B: Math.floor(Math.random() * 256),
          };
          return (
            <S.Comment key={Comment.id}>
              <div>
                <S.Profile profileColor={color}></S.Profile>
                <S.NickName>{Comment.nickName}</S.NickName>
              </div>
              <S.CommnetData>{Comment.text}</S.CommnetData>
            </S.Comment>
          );
        })}
      </S.CommentBar>
    </S.ShowPage>
  );
};

export default ShowPost;
