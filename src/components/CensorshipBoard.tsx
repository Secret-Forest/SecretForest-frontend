import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RequestWithToken } from "../api/axios";
import { boardList, readMoreType } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import * as S from "../styles/adminMain";
import next from "../assets/image/next.png";
import BoardController from "./BoardController";
import controller from "../assets/image/controller.svg";
import boardLink from "../assets/image/page.svg";

const CensorshipBoard = () => {
  const navigate = useNavigate();
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [censorshipBoard, setCensorshipBoard] = useState<boardList[]>([]);
  const [readMore, setReadMore] = useState<readMoreType>({
    state: false,
    id: 0,
  });

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

  const onReadMore = (id: number) => {
    const newData: readMoreType = {
      state: true,
      id,
    };
    setReadMore(newData);
  };
  const offReadMore = () => {
    const newData: readMoreType = {
      ...readMore,
      state: false,
    };
    setReadMore(newData);
  };

  const boardDelete = async (id: number) => {
    await RequestWithToken(`admin/censorship/${id}`, "delete");
    getCensorshipBoard();
    offReadMore();
  };

  const ReportBoardPass = async (id: number) => {
    await RequestWithToken(`admin/censorship/${id}/pass`, "put");
    getCensorshipBoard();
    offReadMore();
  };

  const getCensorshipBoard = () => {
    RequestWithToken(
      `admin/censorship/board?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    )
      .then(({ data }) => {
        setCensorshipBoard(data.postViewDtoList);
      })
      .catch(() => {
        navigate("/");
      });
  };

  return (
    <S.ListSection>
      <S.SectionTitle>검열해야하는 게시물</S.SectionTitle>
      <S.List>
        {censorshipBoard.length ? (
          censorshipBoard.map((data) => (
            <div key={data.id} style={{ position: "relative" }}>
              <S.ReportBoard>
                <h1>{data.title}</h1>
                <h2>{data.writer}</h2>
              </S.ReportBoard>
              <Link
                to={`/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
                title={`${data.id}`}
              >
                <S.BoardLink>
                  <img src={boardLink} alt="controller" />
                </S.BoardLink>
              </Link>
              <S.Controller onClick={() => onReadMore(data.id)}>
                <img src={controller} alt="controller" />
              </S.Controller>{" "}
            </div>
          ))
        ) : (
          <h1 style={{ margin: "10px 20px" }}>게시물이 존재하지 않습니다</h1>
        )}
      </S.List>

      <S.PageBtn>
        {readMore.state && (
          <BoardController
            id={readMore.id}
            offReadMore={offReadMore}
            ReportBoardPass={ReportBoardPass}
            boardDelete={boardDelete}
          />
        )}
        <img src={next} onClick={PreviousPage} alt="Previous" />
        <p>{urlPrams.page + 1}</p>
        <img src={next} onClick={NextPage} alt="next" />
      </S.PageBtn>
    </S.ListSection>
  );
};

export default CensorshipBoard;
