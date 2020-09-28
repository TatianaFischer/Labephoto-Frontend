import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  PageConteiner,
  Logo,
  Tittle,
  InputContainer,
  Button,
  ButtonIncon,
  Footer,
  Legend,
} from "./styles";
import LogoImage from "./logo-color.png";
//material ui:
import TextField from "@material-ui/core/TextField";
import HomeIcon from "@material-ui/icons/Home";

const CreateImagePage = () => {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/images/feed");
  };
  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>Adicionar nova imagem no feed</b>
      </Tittle>

      <InputContainer>
        <TextField
          label="Título"
          id="tittle"
          type="text"
          placeholder="Título"
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
          label="Link da imagem"
          id="url"
          type="url"
          placeholder="www.image.com.br"
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
          label="Coleção"
          id="collection"
          type="text"
          placeholder="Coleção"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          fullWidth
        />
      </InputContainer>
      <Button>
        <b>Adicionar</b>
      </Button>
      <Footer>
        <ButtonIncon>
          <HomeIcon
            onClick={goToFeedPage}
            fontSize="large"
            color="action"
            titleAccess="Ir para o feed"
          />
        </ButtonIncon>
        <Legend>Feed</Legend>
      </Footer>
    </PageConteiner>
  );

  // OLEO = "#ÓLEO",
  // AQUARELA = "#AQUARELA",
  // PASTEL = "#PASTEL",
  // ACRILICA = "#ACRÍLICA",
  // AREIA = "#AREIA",
  // DIGITAL = "#DIGITAL",
  // OCIDENTAL = "#OCIDENTAL",
  // ORIENTAL = "#ORIENTAL",
};

export default CreateImagePage;
