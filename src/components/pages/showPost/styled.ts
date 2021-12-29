import styled from "styled-components";

export const ShowPage = styled.main`
  width: 90vw;
  margin: 30px auto 0 auto;
  /* background-color: red; */
  height: 50rem;

  display: flex;
`;

export const Post = styled.section`
  width: 80%;
  height: auto;
  /* background-color: blue; */

  border: 1.5px solid #202020;
  border-top: green 6px solid;
`;

export const CommentBar = styled.aside`
  width: 20%;
  height: auto;
  background-color: yellow;
  /* border-left: 1.5px solid #202020; */

  border: 1.5px solid #202020;
`;

export const TitleBar = styled.div`
  width: 100%;
  height: 15%;
  /* background-color: green; */
  display: flex;
  border-bottom: green 5px solid;
`;

export const PostContext = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  /* background-color: rgba(255, 0, 0, 0.5); */
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

export const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 500;
  overflow: auto;
  color: #24523d;
  white-space: nowrap;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
  }
  img {
    height: 2.4em;
    cursor: pointer;
  }
`;
