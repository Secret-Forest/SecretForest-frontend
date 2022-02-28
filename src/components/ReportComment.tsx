import { useEffect, useState } from "react";
import { RequestWithToken } from "../api/axios";
import * as S from "../styles/adminMain";
import report from "../assets/image/report.png";
import { boardList } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import OneReportComment from "./OneReportComment";
import ReportCommentReadMore from "./ReportCommentReadMore";
import { BoardDataType } from "../interface/boardList";
import next from "../assets/image/next.png";

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

  useEffect(() => {
    getReportComment();
  }, [urlPrams]);

  const NextPage = () => {
    setPrams({
      ...urlPrams,
      page: urlPrams.page + 1,
    });
  };

  const PreviousPage = () => {
    if (!urlPrams.page) return;

    setPrams({
      ...urlPrams,
      page: urlPrams.page - 1,
    });
  };

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

  const commentDelete = async (id: number) => {
    await RequestWithToken(`admin/report/${id}`, "delete");
    getReportComment();
    offReadMore();
  };

  const ReportCommentPass = async (id: number) => {
    await RequestWithToken(`admin/report/${id}/pass`, "put");
    getReportComment();
    offReadMore();
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
        {reportComment.length ? (
          reportComment.map((data) => (
            <OneReportComment
              data={data}
              key={data.id}
              onReadMore={onReadMore}
            />
          ))
        ) : (
          <h1 style={{ margin: "10px 20px" }}>게시물이 더 존재하지 않습니다</h1>
        )}
        {readMore.state && (
          <ReportCommentReadMore
            data={readMore.data}
            offReadMore={offReadMore}
            commentDelete={commentDelete}
            ReportCommentPass={ReportCommentPass}
          />
        )}
      </S.List>
      <S.PageBtn>
        <img src={next} onClick={PreviousPage} alt="Previous" />
        <p>{urlPrams.page + 1}</p>
        <img src={next} onClick={NextPage} alt="next" />
      </S.PageBtn>
    </S.ListSection>
  );
};

export default ReportComment;
