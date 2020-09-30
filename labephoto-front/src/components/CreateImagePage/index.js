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

//checkbox
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

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

        <FormControl component="fieldset">
          <FormLabel component="legend">TAGS da Imagem:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="OLEO" />}
              label="#ÓLEO"
            />
            <FormControlLabel
              control={<Checkbox name="AQUARELA" />}
              label="#AQUARELA"
            />
            <FormControlLabel
              control={<Checkbox name="PASTEL" />}
              label="#PASTEL"
            />

            <FormControlLabel
              control={<Checkbox name="ACRILICA" />}
              label="#ACRÍLICA"
            />
            <FormControlLabel
              control={<Checkbox name="AREIA" />}
              label="#AREIA"
            />
            <FormControlLabel
              control={<Checkbox name="DIGITAL" />}
              label="#DIGITAL"
            />
            <FormControlLabel
              control={<Checkbox name="OCIDENTAL" />}
              label="#OCIDENTAL"
            />
            <FormControlLabel
              control={<Checkbox name="ORIENTAL" />}
              label="#ORIENTAL"
            />
          </FormGroup>
          <FormHelperText>
            Escolha as tags que descrevem sua arte!
          </FormHelperText>
        </FormControl>
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
};

export default CreateImagePage;
