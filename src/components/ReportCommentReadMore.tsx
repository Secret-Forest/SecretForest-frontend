import * as S from "../styles/ReportCommentReadMore";
import cancel from "../assets/image/cross.svg";
import { boardList } from "../interface/admin";

interface props {
  data: boardList;
  offReadMore: () => void;
  commentDelete: (id: number) => void;
  ReportCommentPass: (id: number) => void;
}
const ReportCommentReadMore = ({
  data,
  offReadMore,
  commentDelete,
  ReportCommentPass,
}: props) => {
  return (
    <S.DarkBackground>
      <S.CommentViewer>
        <S.Cancel onClick={offReadMore}>
          <img src={cancel} alt="cancel button" />
        </S.Cancel>
        <S.ButtonBar>
          <S.Button className="Pass" onClick={() => ReportCommentPass(data.id)}>
            Pass
          </S.Button>
          <S.Button className="Delete" onClick={() => commentDelete(data.id)}>
            Delete
          </S.Button>
        </S.ButtonBar>
        <S.Content>{data.comment}</S.Content>
      </S.CommentViewer>
    </S.DarkBackground>
  );
};

export default ReportCommentReadMore;
