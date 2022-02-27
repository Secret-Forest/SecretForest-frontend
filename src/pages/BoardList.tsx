import * as S from "../styles/boardList";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Request from "../api/axios";
import Board from "../components/Board";
import { BoardDataType } from "../interface/boardList";

interface urlPramsType {
  page: number;
  size: number;
}

const BoardList = () => {
  const searchKeywordRef = useRef<HTMLInputElement>(null);
  const [urlPrams, setUrlPrams] = useState<urlPramsType>({ page: 0, size: 6 });

  const [BoardData, setBoardData] = useState<BoardDataType[]>([]);

  useEffect(() => {
    getBoardList();
  }, [urlPrams]);

  const getBoardList = async () => {
    await Request(`?page=${urlPrams.page}&size=${urlPrams.size}`, "get").then(
      (res) => {
        console.log(res);
        setBoardData(res.postViewDtoList);
      }
    );
  };

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

  const NextPage = () => {
    setUrlPrams({
      ...urlPrams,
      page: urlPrams.page + 1,
    });
  };

  const PreviousPage = () => {
    if (!urlPrams.page) return;

    setUrlPrams({
      ...urlPrams,
      page: urlPrams.page - 1,
    });
  };

  return (
    <S.ListPage>
      <div style={{ width: "70%" }}>
        <S.BoardList>
          {BoardData.map((data) => (
            <Board data={data} key={data.id} />
          ))}
        </S.BoardList>
        <S.pageBtn>
          <img src="image/next.png" onClick={PreviousPage} alt="Previous" />
          <p>{urlPrams.page + 1}</p>
          <img src="image/next.png" onClick={NextPage} alt="next" />
        </S.pageBtn>
      </div>
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
