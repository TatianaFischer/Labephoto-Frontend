import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
// import ImgTest from "./img-test.jpg";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const Feed = () => {
  let history = useHistory();
  useAuthorization();
  const [images, setImages] = useState([]);

  const goToImageCreatePage = () => {
    history.push("/images/");
  };
  ///fazer o go to image details modal

  const token = localStorage.getItem("token");

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
        `http://localhost:3001/images/feed`,
        axiosConfig
      );
      console.log(response.data.result);
      setImages(response.data.result);
    } catch (e) {
      console.log(e);

      alert("erro ao conectar");
    }
  };
  const imagesRender = images.map((image) => {
    return (
      <div>
        <FeedImage src={image.file} alt="Imagem da sua galeria de arte" />
        <Subtitle>{image.subtitle}</Subtitle>
      </div>
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
