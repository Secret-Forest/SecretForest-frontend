import * as S from "./styled";
import searchBtn from "../../../assets/img/searchBtn.svg";
const BoardList = () => {
  return (
    <S.ListPage>
      <S.BoardList></S.BoardList>
      <S.Search>
        <S.SearchBar>
          <S.SearchInput placeholder="제목 혹은 닉네임을 입력해주세요." />
          <img src={searchBtn} alt="검색 버튼" />
        </S.SearchBar>
        <S.SuggestedSearchTerm></S.SuggestedSearchTerm>
      </S.Search>
    </S.ListPage>
  );
};

export default BoardList;
