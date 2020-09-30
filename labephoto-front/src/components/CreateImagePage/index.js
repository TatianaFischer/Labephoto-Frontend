import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import {
  PageConteiner,
  Logo,
  Tittle,
  InputContainer,
  Button,
  ButtonIncon,
  Footer,
  Legend,
  Form,
  CheckboxStyle,
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
  useAuthorization();

  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState("");
  const [collection, setCollection] = useState("");
  const [checkbox, setCheckbox] = useState({
    OLEO: false,
    AQUARELA: false,
    PASTEL: false,
    ACRILICA: false,
    AREIA: false,
    DIGITAL: false,
    OCIDENTAL: false,
    ORIENTAL: false,
  });

  const goToFeedPage = () => {
    history.push("/images/feed");
  };

  const handleCheckbox = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const {
    OLEO,
    AQUARELA,
    PASTEL,
    ACRILICA,
    AREIA,
    DIGITAL,
    OCIDENTAL,
    ORIENTAL,
  } = checkbox;
  // para dar numero mínimo de tags: const errorRequired = [OLEO].filter((c) => c).length !== 1;

  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>ADICIONAR NOVA IMAGEM AO FEED</b>
      </Tittle>

      <Form>
        <InputContainer>
          <TextField
            label="Título"
            id="tittle"
            type="text"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            required
            fullWidth
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <TextField
            label="Link da imagem"
            id="file"
            type="url"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            required
            fullWidth
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />

          <TextField
            label="Coleção"
            id="collection"
            type="text"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            required
            fullWidth
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
          />

          <CheckboxStyle>
            <FormControl required>
              <FormLabel>Opções de TAGS:</FormLabel>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="OLEO"
                      checked={OLEO}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#ÓLEO"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="AQUARELA"
                      checked={AQUARELA}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#AQUARELA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="PASTEL"
                      checked={PASTEL}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#PASTEL"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="ACRILICA"
                      checked={ACRILICA}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#ACRÍLICA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="AREIA"
                      checked={AREIA}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#AREIA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="DIGITAL"
                      checked={DIGITAL}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#DIGITAL"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="OCIDENTAL"
                      checked={OCIDENTAL}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#OCIDENTAL"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="ORIENTAL"
                      checked={ORIENTAL}
                      onChange={handleCheckbox}
                    />
                  }
                  label="#ORIENTAL"
                />
              </FormGroup>
              <FormHelperText>
                Escolha as tags que descrevam sua arte!
              </FormHelperText>
            </FormControl>
          </CheckboxStyle>
        </InputContainer>
        <Button onClick={goToFeedPage}>
          <b>Adicionar</b>
        </Button>
      </Form>
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
