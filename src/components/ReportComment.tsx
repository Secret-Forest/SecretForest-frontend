import { useEffect, useState } from "react";
import { RequestWithToken } from "../api/axios";
import * as S from "../styles/adminMain";
import report from "../assets/image/report.png";
import { boardList } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import OneReportComment from "./OneReportComment";

const ReportComment = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [reportComment, setReportComment] = useState<boardList[]>([]);

  useEffect(() => {
    getReportComment();
  }, []);

  const getReportComment = () => {
    RequestWithToken(
      `admin/report/comment?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    ).then(({ data }) => {
      setReportComment(data.commentsViewResponseList);
    });
  };

  return (
    <S.ListSection>
      <S.SectionTitle>
        신고된 댓글
        <img src={report} alt="신고된 댓글" />
      </S.SectionTitle>
      <S.List>
        {reportComment.map((data) => (
          <OneReportComment data={data} key={data.id} />
        ))}
      </S.List>
    </S.ListSection>
  );
};

export default ReportComment;
