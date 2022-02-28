import { useState } from "react";
import { boardList } from "../interface/admin";
import * as S from "../styles/adminMain";
import ReportCommentReadMore from "./ReportCommentReadMore";

interface props {
  data: boardList;
}

const OneReportComment = ({ data }: props) => {
  const [readMoreState, setReadMoreState] = useState(false);
  return (
    <S.ReportBoard>
      <h1>{data.comment}</h1>
      <h2>{data.writer}</h2>
      {readMoreState && <ReportCommentReadMore />}
    </S.ReportBoard>
  );
};

export default OneReportComment;
