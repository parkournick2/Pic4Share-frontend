import React from "react";
import TextField from "@material-ui/core/TextField";
import { ButtonsContainer, MainContainer, StyledForm, Title } from "./styled";
import { Button } from "@material-ui/core";
import { goToSignup } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const [form, setForm] = useForm({
    password: "",
    nickname: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer>
      <StyledForm onSubmit={onSubmitForm}>
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
          <Button
            onClick={() => goToSignup(history)}
            variant="outlined"
            color="primary"
          >
            Signup
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </MainContainer>
  );
};

export default LoginPage;
