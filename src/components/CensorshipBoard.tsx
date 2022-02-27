import { useEffect, useState } from "react";
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
          <S.ReportBoard key={data.id}>
            <h1>{data.title}</h1>
            <h2>{data.writer}</h2>
          </S.ReportBoard>
        ))}
      </S.List>
    </S.ListSection>
  );
};

export default CensorshipBoard;
