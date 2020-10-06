import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import axios from "axios";
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

  const [tag, setTag] = useState([]);

  const [tagCheckbox, setTagCheckbox] = useState({
    OLEO: "",
    AQUARELA: "",
    PASTEL: "",
    ACRILICA: "",
    AREIA: "",
    DIGITAL: "",
    OCIDENTAL: "",
    ORIENTAL: "",
  });

  const allTags = [
    "#OLEO",
    "#AQUARELA",
    "#PASTEL",
    "#ACRíLICA",
    "#AREIA",
    "#DIGITAL",
    "#OCIDENTAL",
    "#ORIENTAL",
  ];

  const handleChangeCheckbox = (e) => {
    const { name, value } = e.target;
    setTagCheckbox({ ...tagCheckbox, [name]: value });
    setTag([...tag, name]);
  };

  const goToFeedPage = () => {
    history.push("/images/feed");
  };

  const createNewImage = async (e) => {
    e.preventDefault();

    const body = {
      subtitle: subtitle,
      file: file,
      collection: collection,
      tag: tag,
    };

    const token = localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };
    console.log(body);
    console.log(axiosConfig);
    try {
      const response = await axios.post(
        `http://localhost:3000/images/`,
        body,
        axiosConfig
      );
      console.log(response);

      alert("Imagem criada com sucesso!");

      setSubtitle({ subtitle: "" });
      setFile({ file: "" });
      setCollection({ collection: "" });
      history.push("/images/feed");
    } catch (e) {
      alert("Falha na criação da imagem!");
    }
  };

  const checkboxRendle = allTags.map((item) => {
    return (
      <div>
        <input
          type="checkbox"
          name={item}
          value={tagCheckbox.tem}
          onChange={handleChangeCheckbox}
        />
        <p>{item}</p>
      </div>
    );
  });

  return (
    <PageConteiner>
      <header>
        <Logo src={LogoImage} />
      </header>
      <Tittle>
        <b>ADICIONAR NOVA IMAGEM AO FEED</b>
      </Tittle>

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
            <FormGroup row>{checkboxRendle}</FormGroup>
            <FormHelperText>
              Escolha as tags que descrevam sua arte!
            </FormHelperText>
          </FormControl>
        </CheckboxStyle>
      </InputContainer>
      <Button onClick={createNewImage}>
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
