import styled from "styled-components";

export const Comment = styled.div`
  margin: 20px;

  white-space: pre-wrap;
  word-wrap: break-word;

  div:first-child {
    display: flex;
    align-items: baseline;
  }
`;

interface colorType {
  profileColor: {
    R: number;
    G: number;
    B: number;
  };
}
export const Profile = styled.div<colorType>`
  ${({ profileColor }): string =>
    `background-color: rgb(${profileColor.R}, ${profileColor.G}, ${profileColor.B});`}
  width: 2em;
  height: 2em;
  border-radius: 1em;
  margin-right: 0.8em;
`;

export const NickName = styled.p`
  font-size: 1.3em;
`;

export const CommnetData = styled.div`
  font-size: 1.2em;
  margin: 10px 0 0 2em;
`;

export const CommentBar = styled.aside`
  width: 30%;
  height: auto;

  border: 1.5px solid #202020;
  overflow-y: auto;
`;

export const Over = styled.div`
  width: 100%;
  height: 30rem;
  overflow-y: auto;
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

export const CommentInput = styled.input`
  width: 85%;
  margin: 10px 3%;
  border-radius: 25px;
  outline: none;
  padding-left: 20px;
  font-size: 18px;
  height: 40px;
  top: 100px;
  left: 0;
`;

export const Report = styled.img`
  margin-left: 10px;
  height: 20px;
  cursor: pointer;
`;
