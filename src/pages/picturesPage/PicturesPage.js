import { Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";
import PictureCard from "../../components/PictureCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToCreatePicture } from "../../routes/coordinator";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {
  MainContainer,
  Header,
  Title,
  SearchContainer,
  StyledTextField,
  PicturesContainer,
  AddButton,
} from "./styled";
import { BASE_URL } from "../../constants/urls";
import { logout } from "../../services/user";

const PicturesPage = () => {
  useProtectedPage();
  const history = useHistory();

  const pictures = useRequestData([], `${BASE_URL}/picture/all`);
  const picturesList = pictures.map((pic) => {
    return (
      <PictureCard
        key={pic.id}
        author={pic.author}
        img={pic.file}
        title={pic.subtitle}
      />
    );
  });

  return (
    <MainContainer>
      <AddButton onClick={() => goToCreatePicture(history)}>
        <AddBoxIcon style={{ fontSize: 50 }} color="primary" />
      </AddButton>
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
      <PicturesContainer>{picturesList}</PicturesContainer>
    </MainContainer>
  );
};

export default PicturesPage;
