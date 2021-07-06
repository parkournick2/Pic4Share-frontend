import { Button } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import {
  ButtonsContainer,
  MainContainer,
  StyledForm,
  StyledTextField,
  Title,
} from "./styled";

const SignupPage = () => {
  const [form, setForm] = useForm({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });

  return (
    <MainContainer>
      <StyledForm>
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
          <Button variant="outlined" color="primary">
            back
          </Button>
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </MainContainer>
  );
};

export default SignupPage;
