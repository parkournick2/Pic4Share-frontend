import { Button, IconButton, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { primaryColor } from "../constants/colors";
import { useHistory } from "react-router-dom";
import { goToAlbums } from "../routes/coordinator";

const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 80px;
  width: 100%;
  box-shadow: 0px 0px 4px black;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-family: "Passion One", cursive;
  margin: 0px;
  color: ${primaryColor};
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const StyledTextField = styled(TextField)`
  width: 400px;
`;

const PicturesHeader = (props) => {
  const history = useHistory();
  return (
    <MainContainer>
      <Title>Pic4Share</Title>
      <SearchContainer>
        <StyledTextField
          name="text"
          onChange={props.setForm}
          variant="outlined"
        />
        <IconButton onClick={props.toSearch}>
          <SearchIcon />
        </IconButton>
      </SearchContainer>
      <Button
        onClick={() => goToAlbums(history)}
        variant="outlined"
        color="primary"
      >
        Voltar
      </Button>
    </MainContainer>
  );
};

export default PicturesHeader;
