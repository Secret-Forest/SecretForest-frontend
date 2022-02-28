import { boardList } from "../interface/admin";
import * as S from "../styles/adminMain";
import controller from "../assets/image/controller.svg";

interface props {
  data: boardList;
  onReadMore: (data: boardList) => void;
}

const OneReportComment = ({ data, onReadMore }: props) => {
  const readMore = () => {
    onReadMore(data);
  };

  return (
    <S.ReportBoard>
      <h1>{data.comment}</h1>
      <h2>{data.writer}</h2>
      <S.Controller onClick={readMore}>
        <img src={controller} alt="controller" />
      </S.Controller>
    </S.ReportBoard>
  );
};

export default OneReportComment;
