import React, { useState } from "react";
import axios from "axios";
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

const LoginPage = () => {
  let history = useHistory();
  const [emailOrNick, setEmailOrNick] = useState("");
  const [password, setPassword] = useState("");

  const goToSignupPage = () => {
    history.push("/users/signup");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const body = {
      emailOrNick: emailOrNick,
      password: password,
    };
    console.log(body);
    try {
      const response = await axios.post(
        `http://localhost:3001/users/login`,
        body
      );

      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      console.log(response.data.token);
      alert("Logado com sucesso!");

      history.push("/images/feed");
    } catch (e) {
      alert("Falha no login");
    }
  };

  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>Fazer Login</b>
      </Tittle>
      <form onSubmit={handleLogin}>
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
            style={{ margin: 8 }}
            required
            onChange={(e) => setEmailOrNick(e.target.value)}
            value={emailOrNick}
          />

          <OutlinedInput
            id="password"
            type="password"
            placeholder="Senha (mínimo 6 caracteres)"
            margin="normal"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrikn: true }}
            style={{ margin: 8 }}
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>
        <Button>
          <b>Entrar</b>
        </Button>
      </form>

      <Button2 onClick={goToSignupPage}>Criar conta</Button2>
    </PageConteiner>
  );
};

export default LoginPage;
