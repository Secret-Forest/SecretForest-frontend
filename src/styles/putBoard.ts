import styled from "styled-components";

export const ShowPage = styled.main`
  width: 90vw;
  margin: 30px auto 0 auto;
  /* background-color: red; */
  height: 35rem;
  justify-content: center;

  display: flex;
`;

export const Post = styled.section`
  width: 70%;
  height: auto;
  /* background-color: blue; */

  border: 1.5px solid #202020;
  border-top: green 6px solid;
`;

export const TitleBar = styled.div`
  width: 100%;
  height: 15%;
  /* background-color: green; */
  display: flex;
  border-bottom: green 5px solid;
`;

export const PostContext = styled.textarea`
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  resize: none;
  border: none;
  font-size: 1.5em;
  padding: 2%;
  width: 96%;
  height: 76%;
  overflow-x: hidden;
  overflow-y: auto;
  color: #24523d;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #314f3e;
    border-radius: 3.5px;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 3.5px;
  }
`;

export const TitleDiv = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: aqua; */
  padding: 0 2rem;
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.input`
  font-size: 1.7em;
  font-weight: 500;
  color: #24523d;
  white-space: nowrap;
  scrollbar-width: none;
  /* border: none; */
  outline: none;
`;

export const Writer = styled.label`
  padding: 10px 0 0 10px;
  font-size: 1.3em;
  font-weight: 450;
  color: #5ba782;
`;

export const BtnBar = styled.div`
  width: 20%;
  padding: 0 2.5%;
  height: 100%;
  /* background-color: rgba(43, 12, 100, 1); */
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: #314f3e;
    outline: none;
    border: none;
    width: 7.2em;
    height: 2em;
    margin: 10px;
    color: white;
    font-size: 1.4em;

    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
  }
  img {
    height: 2.4em;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
  }
`;
