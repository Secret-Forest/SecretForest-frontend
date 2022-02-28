import * as S from "../styles/BoardController";
import cancel from "../assets/image/cross.svg";

interface props {
  id: number;
  offReadMore: () => void;
  boardDelete: (id: number) => void;
  ReportBoardPass: (id: number) => void;
}

const BoardController = ({
  id,
  offReadMore,
  boardDelete,
  ReportBoardPass,
}: props) => {
  return (
    <S.DarkBackground>
      <S.CommentViewer>
        <S.Cancel onClick={offReadMore}>
          <img src={cancel} alt="cancel button" />
        </S.Cancel>
        <S.Button className="Pass" onClick={() => ReportBoardPass(id)}>
          Pass
        </S.Button>
        <S.Button className="Delete" onClick={() => boardDelete(id)}>
          Delete
        </S.Button>
      </S.CommentViewer>
    </S.DarkBackground>
  );
};

export default BoardController;
