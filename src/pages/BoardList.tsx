import * as S from "../styles/boardList";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Request from "../api/axios";
import { Link } from "react-router-dom";

interface BoardDataType {
  id: number;
  content: string;
  title: string;
  writer: string;
}
type BoardDataStateType = BoardDataType[] | [];

const BoardList = () => {
  const searchKeywordRef = useRef<HTMLInputElement>(null);

  const [BoardData, setBoardData] = useState<BoardDataStateType>([]);

  useEffect(() => {
    Request("", "get").then((res) => {
      setBoardData(res.postViewDtoList);
    });
  }, []);

  const onSearch = () => {
    const keyword: string | undefined = searchKeywordRef.current?.value.trim();
    if (!keyword) {
      Swal.fire({
        title: "모든 항목을 불러옵니다",
        icon: "success",
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        title: `<${keyword}>에 대한 결과입니다`,
        icon: "success",
        allowOutsideClick: false,
      });
    }
  };

  return (
    <S.ListPage>
      <S.BoardList>
        {BoardData.map((data) => (
          <Link
            key={data.id}
            to={`${data.id}`}
            style={{ textDecoration: "none" }}
          >
            <S.Board>
              <h1>{data.title}</h1>
              <h2>{data.writer}</h2>
            </S.Board>
          </Link>
        ))}
      </S.BoardList>
      <S.Search>
        <S.SearchBar>
          <S.SearchInput
            placeholder="제목 혹은 닉네임을 입력해주세요."
            ref={searchKeywordRef}
          />
          <img src="image/searchBtn.svg" alt="검색 버튼" onClick={onSearch} />
        </S.SearchBar>
        <S.SuggestedSearchTerm></S.SuggestedSearchTerm>
      </S.Search>
    </S.ListPage>
  );
};

export default BoardList;