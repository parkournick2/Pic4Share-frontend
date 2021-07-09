import styled, { keyframes } from "styled-components";
import {
  backgroundColor,
  neutralColor,
  primaryColor,
} from "../../constants/colors";
import { TextField } from '@material-ui/core'


export const StyledTextField = styled(TextField)`
  width: 300px;
`;


export const MainContainer = styled.div`
  background-color: ${backgroundColor};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledForm = styled.form`
  height: 500px;
  width: 500px;
  border-radius: 25px;
  background: #e2d6eb;
  box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

export const Header = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 100px;
  width: 100%;
  border-bottom: 2px solid ${neutralColor};
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Passion One", cursive;
  margin: 0px;
  color: ${primaryColor};
`;


export const SubTitle = styled.h6`
  font-size: 20px;
  font-family: "Passion One", cursive;
  font-weight: 200;
  margin: 0px;
  color: ${primaryColor};
`;
