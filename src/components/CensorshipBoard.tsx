import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RequestWithToken } from "../api/axios";
import { boardList } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import * as S from "../styles/adminMain";
import next from "../assets/image/next.png";

const CensorshipBoard = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [censorshipBoard, setCensorshipBoard] = useState<boardList[]>([]);

  useEffect(() => {
    getCensorshipBoard();
  }, []);

  useEffect(() => {
    getCensorshipBoard();
  }, [urlPrams]);

  const NextPage = () => {
    setPrams({
      ...urlPrams,
      page: urlPrams.page + 1,
    });
  };

  const PreviousPage = () => {
    if (!urlPrams.page) return;

    setPrams({
      ...urlPrams,
      page: urlPrams.page - 1,
    });
  };

  const getCensorshipBoard = () => {
    RequestWithToken(
      `admin/censorship/board?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    ).then(({ data }) => {
      setCensorshipBoard(data.postViewDtoList);
    });
  };

  return (
    <S.ListSection>
      <S.SectionTitle>검열해야하는 게시물</S.SectionTitle>
      <S.List>
        {censorshipBoard.length ? (
          censorshipBoard.map((data) => (
            <Link
              to={`/${data.id}`}
              style={{ textDecoration: "none" }}
              key={data.id}
              title={`${data.id}`}
            >
              <S.ReportBoard>
                <h1>{data.title}</h1>
                <h2>{data.writer}</h2>
              </S.ReportBoard>
            </Link>
          ))
        ) : (
          <h1 style={{ margin: "10px 20px" }}>게시물이 존재하지 않습니다</h1>
        )}
      </S.List>

      <S.PageBtn>
        <img src={next} onClick={PreviousPage} alt="Previous" />
        <p>{urlPrams.page + 1}</p>
        <img src={next} onClick={NextPage} alt="next" />
      </S.PageBtn>
    </S.ListSection>
  );
};

export default CensorshipBoard;
