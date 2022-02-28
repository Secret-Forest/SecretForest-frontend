import * as S from "../styles/ReportCommentReadMore";
import cancel from "../assets/image/cross.svg";

const ReportCommentReadMore = () => {
  return (
    <S.DarkBackground>
      <S.CommentViewer>
        <S.Cancel>
          <img src={cancel} alt="cancel button" />
        </S.Cancel>
        <S.ButtonBar>
          <S.Button>Delete</S.Button>
        </S.ButtonBar>
        <S.Content></S.Content>
      </S.CommentViewer>
    </S.DarkBackground>
  );
};

export default ReportCommentReadMore;
