import styled from "styled-components";

export const Board = styled.div`
  height: 8rem;
  min-width: 99%;
  border: #2f4c3c 0.5px solid;
  background-color: #bdd8c9;
  display: grid;
  /* justify-items: center; */
  align-items: center;
  cursor: pointer;
  &:active {
    transform: scale(1.01);
  }

  h1 {
    color: #324d3b;
    font-size: 30px;
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
