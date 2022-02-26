import styled from "styled-components";

export const ListPage = styled.main`
  width: 90vw;
  height: 48rem;
  margin: 2.5rem auto 3.5rem auto;
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.aside`
  height: 100%;
  width: 25%;
  display: grid;
  justify-items: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: 80%;
  font-size: 1rem;
`;

export const SearchBar = styled.div`
  padding: 0 5%;
  height: 2.5rem;
  width: 90%;
  border: 0.2em solid #a0a0a0;
  border-radius: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 1.4vw;
    height: 1.4vw;
    cursor: pointer;
  }
`;

export const SuggestedSearchTerm = styled.div`
  width: 100%;
  height: 44rem;
  margin-top: 1rem;
  border: 2px solid #a0a0a0;
`;

export const BoardList = styled.section`
  max-height: 100%;
  width: 70%;
  height: fit-content;
  border-top: #2f4c3c 5px solid;
  border-bottom: #2f4c3c 3px solid;
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-color: #415f4e #a0a0a0;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #415f4e;
    border-radius: 3.5px;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 3.5px;
  }
`;

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