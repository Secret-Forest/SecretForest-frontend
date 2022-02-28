import { useEffect, useState } from "react";
import { RequestWithToken } from "../api/axios";
import * as S from "../styles/adminMain";
import report from "../assets/image/report.png";
import { boardList } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import OneReportComment from "./OneReportComment";
import ReportCommentReadMore from "./ReportCommentReadMore";
import { BoardDataType } from "../interface/boardList";

interface readMoreType {
  state: boolean;
  data: BoardDataType;
}

const ReportComment = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [reportComment, setReportComment] = useState<boardList[]>([]);
  const [readMore, setReadMore] = useState<readMoreType>({
    state: false,
    data: { id: 0, content: "", title: "", writer: "" },
  });

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

  const onReadMore = (data: boardList) => {
    const newData: readMoreType = {
      state: true,
      data,
    };
    setReadMore(newData);
  };

  const commentDelete = (id: number) => {
    RequestWithToken(`admin/report/${id}`, "delete");
    offReadMore();
    getReportComment();
  };

  const offReadMore = () => {
    const newData: readMoreType = {
      ...readMore,
      state: false,
    };
    setReadMore(newData);
  };

  return (
    <S.ListSection>
      <S.SectionTitle>
        신고된 댓글
        <img src={report} alt="신고된 댓글" />
      </S.SectionTitle>
      <S.List>
        {reportComment.map((data) => (
          <OneReportComment data={data} key={data.id} onReadMore={onReadMore} />
        ))}
        {readMore.state && (
          <ReportCommentReadMore
            data={readMore.data}
            offReadMore={offReadMore}
            commentDelete={commentDelete}
          />
        )}
      </S.List>
    </S.ListSection>
  );
};

export default ReportComment;
