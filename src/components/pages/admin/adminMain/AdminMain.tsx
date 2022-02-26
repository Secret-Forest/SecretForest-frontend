import * as S from "./style";

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

const AdminMain = () => {
  return (
    <S.MainPage>
      <S.ListSection>
        <S.SectionTitle>검열해야하는 게시물</S.SectionTitle>
        <S.List>
          {BoardData.map((data) => (
            <S.ReportBoard key={data.id}>
              <h1>{data.title}</h1>
              <h2>{data.writer}</h2>
            </S.ReportBoard>
          ))}
        </S.List>
      </S.ListSection>
      <S.ListSection>
        <S.SectionTitle>
          신고된 게시물
          <img src="image/report.png" alt="신고된 게시물" />
        </S.SectionTitle>
        <S.List>
          {BoardData.map((data) => (
            <S.ReportBoard key={data.id}>
              <h1>{data.title}</h1>
              <h2>{data.writer}</h2>
            </S.ReportBoard>
          ))}
        </S.List>
      </S.ListSection>
      <S.ListSection>
        <S.SectionTitle>
          신고된 댓글
          <img src="image/report.png" alt="신고된 댓글" />
        </S.SectionTitle>
        <S.List>
          {BoardData.map((data) => (
            <S.ReportBoard key={data.id}>
              <h1>{data.title}</h1>
              <h2>{data.writer}</h2>
            </S.ReportBoard>
          ))}
        </S.List>
      </S.ListSection>
    </S.MainPage>
  );
};

export default AdminMain;
