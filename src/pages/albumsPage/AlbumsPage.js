import React, { useEffect, useState } from "react";
import AlbumCard from "../../components/AlbumCard";
import CreateAlbumCard from "../../components/CreateAlbumCard";
import Header from "../../components/Header";
import { getAlbums } from "../../services/albums";
import {
  AlbumsContainer,
  MainContainer,
  SubContainer,
  Title,
  TitleContainer,
} from "./styled";


const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums().then((res) => setAlbums(res));
  }, []);

  return (
      <MainContainer>
        <Header />
        <SubContainer>
          <TitleContainer>
            <Title>Álbuns</Title>
          </TitleContainer>
          <AlbumsContainer>
            <CreateAlbumCard/>
            {albums.map((album) => {
              return (
                <AlbumCard
                  key={album.id}
                  title={album.name}
                  count={album.count}
                  background={album.background}
                />
              );
            })}
          </AlbumsContainer>
        </SubContainer>
      </MainContainer>
  );
};
export default AlbumsPage;
