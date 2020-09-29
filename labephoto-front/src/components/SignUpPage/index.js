import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const goToLoginPage = () => {
    history.push("/users/login");
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
      name: name,
      nickname: nickname,
    };

    try {
      const response = await axios.post(
        `http://localhost:3001/users/signup`,
        body
      );

      localStorage.setItem("token", response.data.token);
      alert("Cadastro realizado com sucesso!");
      history.push("/images/feed");
    } catch (e) {
      alert("Falha no cadastro");
    }
  };
  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>Criar sua Conta do ArtLabe</b>
      </Tittle>

      <form onSubmit={handleSignUp}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Apelido"
            id="nickname"
            type="text"
            placeholder="Apelido"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            required
            fullWidth
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <OutlinedInput
            id="password"
            type="password"
            placeholder="Senha (mínimo 6 caracteres)"
            margin="normal"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrikn: true }}
            margin="none"
            style={{ margin: 8 }}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Button>
          <b>Criar</b>
        </Button>
      </form>

      <Button2 onClick={goToLoginPage}>Faça login em vez disso</Button2>
    </PageConteiner>
  );
};

export default SignUpPage;
