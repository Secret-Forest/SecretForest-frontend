import styled from "styled-components";

// overflow: scroll;
export const ListPage = styled.main`
  width: 90vw;
  height: 50rem;
  /* background-color: red; */
  margin: 2.5rem auto 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const BoardList = styled.section`
  height: 100%;
  width: 70%;
  background-color: blue;
`;

export const Search = styled.aside`
  height: 100%;
  width: 25%;
  display: grid;
  justify-items: center;
  /* background-color: yellow; */
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
  height: 46rem;
  margin-top: 1rem;
  border: 2px solid #a0a0a0;
`;
