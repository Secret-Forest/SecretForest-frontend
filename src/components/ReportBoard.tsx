import { useEffect, useState } from "react";
import { RequestWithToken } from "../api/axios";
import * as S from "../styles/adminMain";
import report from "../assets/image/report.png";
import { boardList } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";

const ReportBoard = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [reportBoard, setReportBoard] = useState<boardList[]>([]);

  useEffect(() => {
    getReportBoard();
  }, []);
  const getReportBoard = () => {
    RequestWithToken(
      `admin/report/board?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    ).then(({ data }) => {
      setReportBoard(data.postViewDtoList);
    });
  };

  return (
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
  );
};

export default ReportBoard;
