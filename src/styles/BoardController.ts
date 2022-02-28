import styled from "styled-components";

export const DarkBackground = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  justify-items: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const CommentViewer = styled.div`
  @keyframes fadein {
    from {
      transform: scale(0.4);
    }
    to {
      transform: scale(1);
    }
  }
  animation: fadein 0.7s ease-out;
  height: 130px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Cancel = styled.button`
  img {
    width: 25px;
  }

  :active {
    transform: scale(0.95);
  }

  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: absolute;
  right: 5px;
  top: 5px;
`;

export const Button = styled.button`
  :active {
    transform: scale(0.95);
  }
  &.Delete {
    background-color: #ff6b6b;
  }
  &.Pass {
    background-color: #ffd43b;
  }
  height: 50px;
  width: 150px;
  border: 0;
  border-radius: 15px;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
