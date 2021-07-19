import { Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  MainContainer,
  Header,
  Title,
  SearchContainer,
  StyledTextField,
  PicturesContainer,
} from "./styled";
import { logout } from "../../services/user";

const PicturesPage = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <MainContainer>
      <Header>
        <Title>Pic4Share</Title>
        <SearchContainer>
          <StyledTextField variant="outlined" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </SearchContainer>
        <Button
          onClick={() => logout(history)}
          variant="outlined"
          color="primary"
        >
          Logout
        </Button>
      </Header>
      <PicturesContainer>teste</PicturesContainer>
    </MainContainer>
  );
};

export default PicturesPage;
