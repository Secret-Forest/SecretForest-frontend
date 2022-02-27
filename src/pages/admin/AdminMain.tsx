import * as S from "../../styles/adminMain";
import report from "../../assets/image/report.png";
import { useEffect, useState } from "react";
import { RequestWithToken } from "../../api/axios";
import { urlPramsType } from "../../interface/urlPrams";
import { boardList } from "../../interface/admin";
import CensorshipBoard from "../../components/CensorshipBoard";

const AdminMain = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [reportBoard, setReportBoard] = useState<boardList[]>([]);
  const [reportComment, setReportComment] = useState<boardList[]>([]);
  useEffect(() => {
    getReportBoard();
    getReportComment();
  }, []);

  const getReportBoard = () => {
    RequestWithToken(
      `admin/report/board?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    ).then(({ data }) => {
      setReportBoard(data.postViewDtoList);
    });
  };

  const getReportComment = () => {
    RequestWithToken(
      `admin/report/comment?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    ).then(({ data }) => {
      console.log(data.commentsViewResponseList);
      setReportComment(data.commentsViewResponseList);
    });
  };

  return (
    <S.MainPage>
      <CensorshipBoard />
      <S.ListSection>
        <S.SectionTitle>
          신고된 게시물
          <img src={report} alt="신고된 게시물" />
        </S.SectionTitle>
        <S.List>
          {reportBoard.map((data) => (
            <S.ReportBoard key={data.id}>
              <h1>{data.title}</h1>
              <h2>{data.writer}</h2>
            </S.ReportBoard>
          ))}
        </S.List>
      </S.ListSection>
      <S.ListSection>
        <S.SectionTitle>
          신고된 댓글
          <img src={report} alt="신고된 댓글" />
        </S.SectionTitle>
        <S.List>
          {reportComment.map((data) => (
            <S.ReportBoard key={data.id}>
              <h1>{data.comment}</h1>
              <h2>{data.writer}</h2>
            </S.ReportBoard>
          ))}
        </S.List>
      </S.ListSection>
    </S.MainPage>
  );
};

export default AdminMain;
