import * as S from "./styled";
import searchBtn from "../../../assets/img/searchBtn.svg";
import { useRef } from "react";
import Swal from "sweetalert2";
import Header from "../../common/header/Header";

const BoardData = [
  {
    id: 1,
    title: "내가하는 이야길 잘 들어봐",
    writer: "Java 혐오자",
  },
  {
    id: 2,
    title: "내가하는 이야길 잘 들어봐",
    writer:
      "Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자Java 혐오자",
  },
  {
    id: 3,
    title: "내가하는 이야길 잘 들어봐",
    writer: "Java 혐오자",
  },
  {
    id: 4,
    title: "내가하는 이야길 잘 들어봐",
    writer: "Java 혐오자",
  },
  {
    id: 5,
    title: "내가하는 이야길 잘 들어봐",
    writer: "Java 혐오자",
  },
  {
    id: 6,
    title:
      "어떤 것은 검은색 어떤 것은 하얀색 색안경을 끼고 보면 어떡해. 넌 착한 사람이고 걘 나쁜 사람이고, 재미없는 너의 세상은 흑백",
    writer: "스텔라장",
  },
  {
    id: 7,
    title:
      "늦게 다니지좀 마. 술은 멀리좀 해봐. 열살짜리 애처럼 말을 안듣니. 정말 웃음만 나와. 누가 누굴보고 아이라 하는지 정말 웃음만 나와.",
    writer: "잔소리",
  },
];

const BoardList = () => {
  const searchKeywordRef = useRef<HTMLInputElement>(null);

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
    <div>
      <Header />
      <S.ListPage>
        <S.BoardList>
          {BoardData.map((data) => (
            <S.Board key={data.id}>
              <h1>{data.title}</h1>
              <h2>{data.writer}</h2>
            </S.Board>
          ))}
        </S.BoardList>
        <S.Search>
          <S.SearchBar>
            <S.SearchInput
              placeholder="제목 혹은 닉네임을 입력해주세요."
              ref={searchKeywordRef}
            />
            <img src={searchBtn} alt="검색 버튼" onClick={onSearch} />
          </S.SearchBar>
          <S.SuggestedSearchTerm></S.SuggestedSearchTerm>
        </S.Search>
      </S.ListPage>
    </div>
  );
};

export default BoardList;
