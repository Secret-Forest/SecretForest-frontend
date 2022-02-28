import styled from "styled-components";
//384B3C
export const MainPage = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 1rem;
  margin-top: 10px;
`;

export const ListSection = styled.section`
  /* background-color: red; */
  height: fit-content;
  width: 25rem;
`;

export const SectionTitle = styled.div`
  height: 3rem;
  /* background-color: burlywood; */
  width: 25rem;
  display: flex;
  color: #285540;
  font-size: 30px;
  align-items: center;
  font-weight: 500;
  img {
    height: 30px;
    margin-left: 10px;
  }
`;

export const List = styled.ul`
  max-height: 37rem;
  height: fit-content;

  width: 25rem;
  /* background-color: rgba(255, 255, 0, 0.5); */
  border-top: 4px solid #314f3e;
  border-bottom: 1px solid #314f3e;
`;

export const ReportBoard = styled.li`
  width: 24.8rem;
  height: 6rem;
  /* background-color: rgb(0, 255, 0); */
  border: #314f3e solid 0.1rem;

  display: grid;
  align-items: center;

  cursor: pointer;
  &:active {
    transform: scale(1.01);
  }

  h1 {
    color: #324d3b;
    font-size: 25px;
    font-weight: 500;

    width: 90%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;

    align-self: flex-end;
    padding-left: 20px;
  }

  h2 {
    color: #72a081;
    font-size: 20px;
    font-weight: 500;

    width: 50%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
    padding-left: 40px;

    align-self: flex-start;
  }
`;

export const PageBtn = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  grid-gap: 30px;

  align-items: center;

  img {
    cursor: pointer;
    height: 20px;
    &:first-child {
      transform: rotate(180deg);
    }
  }

  p {
    font-size: 16px;
    text-align: center;
  }
`;

export const Controller = styled.button`
  img {
    width: 20px;
  }
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;
