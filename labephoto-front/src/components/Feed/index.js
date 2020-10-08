import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import useAuthorization from "../../hooks/useAuthorization";
import {
  PageConteiner,
  Logo,
  Tittle,
  ImagesContainer,
  FeedImage,
  Footer,
  ButtonIcon,
  Legend,
  Subtitle,
} from "./styles";
import LogoImage from "./logo-color.png";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const Feed = () => {
  const [images, setImages] = useState([]);

  const token = localStorage.getItem("token");
  useAuthorization();

  const history = useHistory();

  const goToImageCreatePage = () => {
    history.push("/images/");
  };

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/images/feed`,
        axiosConfig
      );

      setImages(response.data.result);
    } catch (e) {
      console.log(e);
      alert("erro ao conectar");
    }
  };

  const imagesRender = images.map((image) => {
    return (
      <Link to={`/images/${image.id}`} style={{ textDecoration: "none" }}>
        <FeedImage src={image.file} alt="Imagem da sua galeria de arte" />
        <Subtitle>{image.subtitle}</Subtitle>
      </Link>
    );
  });

  return (
    <PageConteiner>
      <Logo src={LogoImage} />
      <Tittle>Sua Galeria</Tittle>
      <ImagesContainer>{imagesRender}</ImagesContainer>
      <Footer>
        <ButtonIcon>
          <AddCircleIcon
            onClick={goToImageCreatePage}
            fontSize="large"
            color="action"
            titleAccess="Adicionar nova imagem"
          />
        </ButtonIcon>
        <Legend>Add</Legend>
      </Footer>
    </PageConteiner>
  );
};

export default Feed;
