import styled from "styled-components";

export const LoginPage = styled.main`
  display: grid;
  grid-gap: 30px;
  margin-top: 70px;
  justify-items: center;
  align-items: center;
  height: 49rem;
`;

export const InputGlub = styled.div`
  display: grid;
  grid-gap: 15px;

  align-self: flex-end;
`;

export const LoginInput = styled.input`
  background-color: #577964;
  width: 30rem;
  height: 6rem;
  outline: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 0 1rem;

  &::placeholder {
    color: white;
    opacity: 1;
  }
`;

export const LoginBtn = styled.button`
  background-color: #314e3e;
  align-self: flex-start;

  width: 32rem;
  height: 6rem;
  outline: none;
  border: none;

  color: white;
  font-size: 25px;
  font-weight: 500;

  &:active {
    transform: scale(0.99);
  }
`;
