import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import PictureCard from "../../components/PictureCard";
import {
  AddButton,
  AddTagContainer,
  MainContainer,
  PicturesContainer,
  StyledForm,
  StyledIcon,
  TagTextField,
} from "./styled";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { createPicture, searchPicture } from "../../services/picture";
import PicturesHeader from "../../components/PicturesHeader";
import PopPop from "react-poppop";
import { Button, IconButton, TextField } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";

const PicturesPage = () => {
  useProtectedPage();
  const [modal, setModal] = useState(false);
  const { albumId } = useParams();
  const [pictures, setPictures] = useState([]);

  const [form, setForm] = useForm({
    albumId: albumId,
    text: "",
  });

  const [tags, setTags] = useState("");
  const [createPictureForm, setCreatePictureForm] = useForm({
    title: "",
    url: "",
    tag: "",
    albumId: albumId,
  });

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    setPictures(await searchPicture(form));
  };

  const addTag = () => {
    if (tags == "") {
      setTags(createPictureForm.tag);
    } else {
      setTags(`${tags}, ${createPictureForm.tag}`);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    createPicture({ ...createPictureForm, tags });
  };

  return (
    <>
      <PopPop
        contentStyle={{ overflow: "hidden" }}
        position="centerCenter"
        open={modal}
        onClose={() => {
          document.body.style.overflow = "auto";
          setModal(false);
        }}
        closeOnEsc={true}
      >
        <StyledForm onSubmit={onSubmitForm}>
          <TextField
            required
            name="title"
            variant="outlined"
            color="primary"
            label="Titulo"
            onChange={setCreatePictureForm}
            value={createPictureForm.title}
          />
          <TextField
            required
            name="url"
            variant="outlined"
            color="primary"
            label="Url"
            onChange={setCreatePictureForm}
            value={createPictureForm.url}
          />
          <AddTagContainer>
            <TagTextField
              name="tag"
              onChange={setCreatePictureForm}
              value={createPictureForm.tag}
              variant="outlined"
              color="primary"
              label="Tag"
            />
            {tags}
            <IconButton onClick={addTag}>
              <AddCircleRounded color="primary" />
            </IconButton>
          </AddTagContainer>
          <Button onClick={()=>setTags('')} color="primary" variant="outlined">
            limpar tags
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Postar
          </Button>
        </StyledForm>
      </PopPop>
      <MainContainer>
        <AddButton onClick={() => setModal(true)}>
          <StyledIcon />
        </AddButton>
        <PicturesHeader toSearch={search} setForm={setForm} />
        <PicturesContainer>
          {pictures.length > 0
            ? pictures.map((picture) => {
                return <PictureCard picture={picture} key={picture.id} />;
              })
            : "Nenhuma imagem encontrada"}
        </PicturesContainer>
      </MainContainer>
    </>
  );
};

export default PicturesPage;
