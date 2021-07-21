import { TextField } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { backgroundColor, primaryColor } from "../../constants/colors";

const grow = keyframes`
  to {
    box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff; 
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
  font-family: "Passion One", cursive;
  color: ${primaryColor};
  margin: 0px;
`;

export const StyledForm = styled.form`
  animation: ${grow} 1s linear forwards;
  height: 500px;
  width: 500px;
  border-radius: 50px;
  gap: 25px;
  background: #e2d6eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledTextField = styled(TextField)`
  width: 300px;
`;
