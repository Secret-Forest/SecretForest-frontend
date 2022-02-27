import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RequestWithToken } from "../api/axios";
import { boardList } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import * as S from "../styles/adminMain";

const CensorshipBoard = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [censorshipBoard, setCensorshipBoard] = useState<boardList[]>([]);

  useEffect(() => {
    getCensorshipBoard();
  }, []);

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
        {censorshipBoard.map((data) => (
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
        ))}
      </S.List>
    </S.ListSection>
  );
};

export default CensorshipBoard;
