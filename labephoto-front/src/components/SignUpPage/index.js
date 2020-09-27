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

const SignUpPage = () => {
  let history = useHistory();

  const goToLoginPage = () => {
    history.push("/users/login");
  };
  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>Criar sua Conta do Artlabe</b>
      </Tittle>
      <InputContainer>
        <TextField
          label="Nome"
          id="name"
          type="name"
          placeholder="Nome"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          label="Apelido"
          id="nickname"
          type="name"
          placeholder="Apelido"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          label="Email"
          id="email"
          type="email"
          placeholder="email@usuario.com"
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
        <b>Criar</b>
      </Button>

      <Button2 onClick={goToLoginPage}>Faça login em vez disso</Button2>
    </PageConteiner>
  );
};

export default SignUpPage;
