import React from "react";
import TextField from "@material-ui/core/TextField";
import { ButtonsContainer, MainContainer, StyledForm, Title } from "./styled";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";

const LoginPage = () => {
  const [form, setForm] = useForm({
    password: "",
    nickname: "",
  });

  return (
    <MainContainer>
      <StyledForm>
        <Title>Pic4Shared</Title>
        <TextField
          name="nickname"
          onChange={setForm}
          value={form.nickname}
          required
          variant="outlined"
          label="nickname"
        />
        <TextField
          required
          name="password"
          onChange={setForm}
          value={form.password}
          type="password"
          variant="outlined"
          label="password"
        />
        <ButtonsContainer>
          <Button variant="outlined" color="primary">
            Signup
          </Button>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </MainContainer>
  );
};

export default LoginPage;
