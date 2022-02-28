import { useEffect, useState } from "react";
import { RequestWithToken } from "../api/axios";
import * as S from "../styles/adminMain";
import report from "../assets/image/report.png";
import { boardList, readMoreType } from "../interface/admin";
import { urlPramsType } from "../interface/urlPrams";
import { Link } from "react-router-dom";
import next from "../assets/image/next.png";
import controller from "../assets/image/controller.svg";
import boardLink from "../assets/image/page.svg";
import BoardController from "./BoardController";

const ReportBoard = () => {
  const [urlPrams, setPrams] = useState<urlPramsType>({ page: 0, size: 5 });
  const [reportBoard, setReportBoard] = useState<boardList[]>([]);
  const [readMore, setReadMore] = useState<readMoreType>({
    state: false,
    id: 0,
  });

  useEffect(() => {
    getReportBoard();
  }, []);

  useEffect(() => {
    getReportBoard();
  }, [urlPrams]);

  const getReportBoard = () => {
    RequestWithToken(
      `admin/report/board?page=${urlPrams.page}&size=${urlPrams.size}`,
      "get"
    ).then(({ data }) => {
      setReportBoard(data.postViewDtoList);
    });
  };

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
    getReportBoard();
    offReadMore();
  };

  const ReportBoardPass = async (id: number) => {
    await RequestWithToken(`admin/censorship/${id}/pass`, "put");
    getReportBoard();
    offReadMore();
  };

  return (
    <S.ListSection>
      <S.SectionTitle>
        신고된 게시물
        <img src={report} alt="신고된 게시물" />
      </S.SectionTitle>
      <S.List>
        {reportBoard.length ? (
          reportBoard.map((data) => (
            <div key={data.id} style={{ position: "relative" }}>
              <S.ReportBoard>
                <h1>{data.title}</h1>
                <h2>{data.writer}</h2>
              </S.ReportBoard>
              <Link
                to={`/${data.id}`}
                style={{ textDecoration: "none" }}
                title={`${data.id}`}
              >
                <S.BoardLink>
                  <img src={boardLink} alt="controller" />
                </S.BoardLink>
              </Link>
              <S.Controller onClick={() => onReadMore(data.id)}>
                <img src={controller} alt="controller" />
              </S.Controller>
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

export default ReportBoard;
