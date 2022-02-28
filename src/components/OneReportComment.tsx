import { boardList } from "../interface/admin";
import * as S from "../styles/adminMain";

interface props {
  data: boardList;
  onReadMore: (data: boardList) => void;
}

const OneReportComment = ({ data, onReadMore }: props) => {
  const readMore = () => {
    onReadMore(data);
  };

  return (
    <S.ReportBoard onClick={readMore}>
      <h1>{data.comment}</h1>
      <h2>{data.writer}</h2>
    </S.ReportBoard>
  );
};

export default OneReportComment;
