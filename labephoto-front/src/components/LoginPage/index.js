import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  PageConteiner,
  Logo,
  Tittle,
  InputContainer,
  Button,
  Button2,
} from "./styles";
import LogoImage from "./logo-color.png";
//material ui:
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdorment from "@material-ui/core/InputAdornment";
import InconButton from "@material-ui/core/IconButton";

const LoginPage = () => {
  let history = useHistory();

  const goToSignupPage = () => {
    history.push("/users/signup");
  };
  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>Fazer Login</b>
      </Tittle>
      <InputContainer>
        <TextField
          label="Email/Apelido"
          id="emailOrNick"
          type="text"
          placeholder="Eemail ou apelido"
          margin="normal"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrikn: true }}
          margin="none"
          style={{ margin: 8 }}
          required
        />

        <OutlinedInput
          id="password"
          type="password"
          placeholder="Senha (minímo 6 caracteres)"
          margin="normal"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrikn: true }}
          margin="none"
          style={{ margin: 8 }}
          required
        />
      </InputContainer>
      <Button>
        <b>Entrar</b>
      </Button>

      <Button2 onClick={goToSignupPage}>Criar conta</Button2>
    </PageConteiner>
  );
};

export default LoginPage;
