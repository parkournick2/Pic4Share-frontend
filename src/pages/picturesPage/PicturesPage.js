import { Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";
import PictureCard from "../../components/PictureCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToLogin } from "../../routes/coordinator";
import {
  MainContainer,
  Header,
  Title,
  SearchContainer,
  StyledTextField,
  PicturesContainer,
} from "./styled";
import { BASE_URL } from "../../constants/urls";

const PicturesPage = () => {
  useProtectedPage();
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history);
  };

  const pictures = useRequestData([], `${BASE_URL}/picture/all`);
  const picturesList = pictures.map((pic) => {
    return <PictureCard key={pic.id} img={pic.file} title={pic.subtitle} />;
  });

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
        {picturesList}
      </PicturesContainer>
    </MainContainer>
  );
};

export default PicturesPage;
