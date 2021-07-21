import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import PopPop from "react-poppop";
import { Button, TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";
import { createAlbum } from "../services/albums";

const MainContainer = styled.div`
  height: 230px;
  width: 230px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

const StyledAddIcon = styled(AddIcon)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 50px;
`;

const StyledForm = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CreateAlbumCard = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useForm({
    name: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    createAlbum(form);
  }

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
        <StyledForm onSubmit={submitForm}>
          <TextField
            required
            name="name"
            onChange={setForm}
            value={form.name}
            type="text"
            variant="outlined"
            label="Nome do album"
          />
          <Button type='submit' color='primary' variant='contained'>Criar</Button>
        </StyledForm>
      </PopPop>
      <MainContainer onClick={() => setModal(true)}>
        <StyledAddIcon />
      </MainContainer>
    </>
  );
};

export default CreateAlbumCard;
