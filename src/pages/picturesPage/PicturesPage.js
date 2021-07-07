import { Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";
import PictureCard from "../../components/PictureCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLogin } from "../../routes/coordinator";
import {
  MainContainer,
  Header,
  Title,
  SearchContainer,
  StyledTextField,
  PicturesContainer,
} from "./styled";

const PicturesPage = () => {
  useProtectedPage();
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history)
  };

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
        <Button onClick={logout} variant="outlined" color="primary">
          Logout
        </Button>
      </Header>
      <PicturesContainer>
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
        <PictureCard />
      </PicturesContainer>
    </MainContainer>
  );
};

export default PicturesPage;
