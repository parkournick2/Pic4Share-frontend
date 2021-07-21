import { IconButton } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import styled from "styled-components";
import {
  backgroundColor,
  neutralColor,
  primaryColor,
} from "../../constants/colors";
import { TextField } from "@material-ui/core";

export const MainContainer = styled.div`
  background-color: ${backgroundColor};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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

export const SearchContainer = styled.div`
  display: none;
  align-items: center;
  gap: 15px;
`

export const PicturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
  gap: 50px;
`

export const AddButton = styled(IconButton)`
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 5px;
  margin: 25px;
`

export const StyledIcon = styled(AddCircleOutline)`
  color: ${primaryColor};
  font-size: 50px;
`

export const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const TagTextField = styled(TextField)`
  width: 150px;
`

export const AddTagContainer = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`