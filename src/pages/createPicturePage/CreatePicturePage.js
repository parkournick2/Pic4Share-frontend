import { Button } from "@material-ui/core";
import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  FormContainer,
  Header,
  MainContainer,
  StyledForm,
  StyledTextField,
  SubTitle,
  Title,
} from "./styled";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { create } from "../../services/picture";

const CreatePicturePage = () => {
  useProtectedPage();

  const history = useHistory();

  const [form, setForm] = useForm({
    file: "",
    subtitle: "",
  });

  const onSubmitForm = (event) => {
    console.log(form)
    create({...form, tags: 'teste'});
    event.preventDefault();
  };

  return (
    <MainContainer>
      <Header>
        <Title>Pic4Share</Title>
        <div />
        <Button onClick={history.goBack} variant="outlined" color="primary">
          Back
        </Button>
      </Header>
      <FormContainer>
        <StyledForm onSubmit={onSubmitForm}>
          <SubTitle>New picture</SubTitle>
          <StyledTextField
            onChange={setForm}
            value={form.file}
            name="file"
            required
            variant="outlined"
            label="image link"
            placeholder="https://picsum.photos/800"
          />
          <StyledTextField
            onChange={setForm}
            value={form.subtitle}
            name="subtitle"
            required
            variant="outlined"
            label="title"
            placeholder="my gf"
          />
          <Button type="submit" variant="outlined" color="primary">
            create
          </Button>
        </StyledForm>
      </FormContainer>
    </MainContainer>
  );
};

export default CreatePicturePage;
