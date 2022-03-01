import * as S from "../styles/boardList";
import { useEffect, useRef, useState } from "react";
import { Request } from "../api/axios";
import Board from "../components/Board";
import { BoardDataType } from "../interface/boardList";
import search from "../assets/image/searchBtn.svg";
import next from "../assets/image/next.png";
import { urlPramsType } from "../interface/urlPrams";

const BoardList = () => {
  const searchKeywordRef = useRef<HTMLInputElement>(null);
  const [searchLog, setSearchLog] = useState<string[]>([]);
  const [urlPrams, setUrlPrams] = useState<urlPramsType>({
    page: 0,
    size: 6,
    title: "",
  });

  const [BoardData, setBoardData] = useState<BoardDataType[]>([]);

  useEffect(() => {
    getBoardList();
  }, [urlPrams]);

  useEffect(() => {
    getSearchLog();
  }, []);

  const getSearchLog = () => {
    const log: string = localStorage.getItem("searchLog") || "";
    console.log(log);
    if (log !== "") setSearchLog(JSON.parse(log));
  };

  const getBoardList = async () => {
    const url = urlPrams.title
      ? `search/title?page=${urlPrams.page}&size=${urlPrams.size}&title=${urlPrams.title}`
      : `?page=${urlPrams.page}&size=${urlPrams.size}`;

    await Request(url, "get").then(({ data }) => {
      setBoardData(data.postViewDtoList);
    });
  };

  const addSearchLog = (searchString: string): void => {
    localStorage.setItem(
      "searchLog",
      JSON.stringify([...searchLog, searchString])
    );
    setSearchLog([...searchLog, searchString]);
    console.log("aaa", searchLog, searchString);
  };

  const onSearch = () => {
    if (searchKeywordRef.current) {
      const keyword: string | undefined =
        searchKeywordRef.current?.value.trim();
      setUrlPrams({ ...urlPrams, title: keyword ?? "" });
      console.log(urlPrams.title);

      addSearchLog(searchKeywordRef.current.value);
      searchKeywordRef.current.value = "";
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
      {BoardData.length ? (
        <div style={{ width: "70%" }}>
          <S.BoardList>
            {BoardData.map((data) => (
              <Board data={data} key={data.id} />
            ))}
          </S.BoardList>
          <S.pageBtn>
            <img src={next} onClick={PreviousPage} alt="Previous" />
            <p>{urlPrams.page + 1}</p>
            <img src={next} onClick={NextPage} alt="next" />
          </S.pageBtn>
        </div>
      ) : (
        <S.Empty>관련 게시물을 찾을 수 없습니다</S.Empty>
      )}
      <S.Search>
        <S.SearchBar>
          <S.SearchInput
            placeholder="제목 혹은 닉네임을 입력해주세요."
            ref={searchKeywordRef}
          />
          <img src={search} alt="검색 버튼" onClick={onSearch} />
        </S.SearchBar>
        <S.SuggestedSearchTerm>
          {searchLog.map((searchString, index) => (
            <S.SearchHistory key={index}>{searchString}</S.SearchHistory>
          ))}
        </S.SuggestedSearchTerm>
      </S.Search>
    </S.ListPage>
  );
};

export default BoardList;
