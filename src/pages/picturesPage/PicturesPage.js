import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import PictureCard from "../../components/PictureCard";
import { MainContainer, PicturesContainer } from "./styled";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { searchPicture } from "../../services/picture";
import PicturesHeader from "../../components/PicturesHeader";

const PicturesPage = () => {
  useProtectedPage();
  const { albumId } = useParams();
  const [pictures, setPictures] = useState([]);

  const [form, setForm] = useForm({
    albumId: albumId,
    text: "",
  });

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    setPictures(await searchPicture(form));
  };

  return (
    <MainContainer>
      <PicturesHeader toSearch={search} setForm={setForm}/>
      <PicturesContainer>
        {pictures.map((picture) => {
          return <PictureCard picture={picture} key={picture.id} />;
        })}
      </PicturesContainer>
    </MainContainer>
  );
};

export default PicturesPage;
