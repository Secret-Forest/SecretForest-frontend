import { Link } from "react-router-dom";
import { BoardDataType } from "../interface/boardList";
import * as S from "../styles/board";

interface props {
  data: BoardDataType;
}

const Board = ({ data }: props) => {
  return (
    <Link to={`${data.id}`} style={{ textDecoration: "none" }}>
      <S.Board>
        <h1>{data.title}</h1>
        <h2>{data.writer}</h2>
      </S.Board>
    </Link>
  );
};

export default Board;
