import { Button, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import PictureCard from "../../components/PictureCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainContainer, Header, Title, SearchContainer, StyledTextField, PicturesContainer } from "./styled";

const PicturesPage = () => {
  useProtectedPage();
  return (
    <MainContainer>
      <Header>
        <Title>Pic4Share</Title>
        <SearchContainer>
          <StyledTextField variant='outlined'/>
          <IconButton><SearchIcon /></IconButton>
        </SearchContainer>
        <Button variant='outlined' color='primary'>Logout</Button>
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
