import styled from "styled-components";

export const Header = styled.header`
  background-color: #2c523d;
  width: 100%;
  padding: 0.5vw 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  height: 60px;
`;

export const Write = styled.button`
  border: none;
  margin-right: 20px;

  background-color: transparent;

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 25px;
  }
`;
