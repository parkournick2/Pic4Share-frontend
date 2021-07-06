import styled from "styled-components";
import { backgroundColor, primaryColor } from "../../constants/colors";

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
  height: 400px;
  width: 400px;
  border-radius: 50px;
  background: #e2d6eb;
  box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`
