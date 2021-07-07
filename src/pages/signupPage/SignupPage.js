import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/user";
import {
  ButtonsContainer,
  MainContainer,
  StyledForm,
  StyledTextField,
  Title,
} from "./styled";

const SignupPage = () => {
  const history = useHistory();

  const [form, setForm] = useForm({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });

  const onSubmitForm = (event) => {
    signup(form, history);
    event.preventDefault();
  };

  return (
    <MainContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <Title>Signup</Title>
        <StyledTextField
          onChange={setForm}
          value={form.name}
          name="name"
          required
          variant="outlined"
          label="name"
        />
        <StyledTextField
          onChange={setForm}
          value={form.email}
          name="email"
          required
          type="email"
          variant="outlined"
          label="email"
        />
        <StyledTextField
          onChange={setForm}
          value={form.nickname}
          name="nickname"
          required
          variant="outlined"
          label="nickname"
        />
        <StyledTextField
          onChange={setForm}
          value={form.password}
          name="password"
          required
          type="password"
          variant="outlined"
          label="password"
        />
        <ButtonsContainer>
          <Button
            onClick={() => history.goBack()}
            variant="outlined"
            color="primary"
          >
            back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </MainContainer>
  );
};

export default SignupPage;
