import styled, { keyframes } from "styled-components";
import { backgroundColor, primaryColor } from "../../constants/colors";

const grow = keyframes`
  to {
    height: 400px;
    width: 400px;
    border-radius: 50px;
    gap: 25px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${backgroundColor};
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Passion One', cursive;
  color: ${primaryColor};
  margin: 0px;
`

export const StyledForm = styled.form`
  height: 300px;
  width: 300px;
  animation: ${grow} 300ms linear forwards;
  border-radius: 100px;
  background: #e2d6eb;
  box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`
