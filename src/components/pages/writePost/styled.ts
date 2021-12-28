import styled from "styled-components";

export const WritePostPage = styled.main`
  width: 1800px;
  height: 86vh;
  margin: 20px auto;
  display: flex;
`;

export const PostInfo = styled.section`
  height: 100%;
  width: 20%;
  display: grid;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  div {
    display: grid;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    grid-gap: 20px;
  }
`;

export const WritePost = styled.section`
  height: 100%;
  width: 80%;
  border: 1.5px #202020 solid;
`;

export const InfoInput = styled.input`
  background-color: #087f5b;
  width: 300px;
  height: 80px;
  outline: none;
  border: none;

  color: #d1d1d5;
  font-size: 20px;
  padding: 0 10px;

  &::placeholder {
    color: #d1d1d5;
  }
`;

export const InputDiv = styled.div`
  margin: 10px 25px 20px 25px;
  width: auto;
`;

export const Label = styled.p`
  color: #3f6755;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  padding-left: 10px;
`;

export const TitleInput = styled.input`
  background-color: transparent;
  outline: none;
  margin-top: 10px;

  border: 1px solid #202020;
  width: 1380px;
  height: 65px;
`;

export const ContextInput = styled.textarea`
  background-color: transparent;
  outline: none;
  margin-top: 10px;

  border: 1px solid #202020;
  width: 1380px;
  height: 520px;

  resize: none;
`;

export const ButtonBar = styled.div`
  display: grid;
  justify-items: right;
  align-items: right;
  margin: 0px 40px;
  width: auto;

  button {
    background-color: #314f3e;
    outline: none;
    border: none;
    color: white;
    font-size: 20px;
    padding: 8px 20px;
  }

  button:active {
    transform: scale(0.98);
  }
`;
