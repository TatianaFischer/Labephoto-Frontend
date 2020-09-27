import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  PageConteiner,
  Logo,
  Tittle,
  ImagesContainer,
  FeedImage,
  Footer,
  Button,
} from "./styles";
import LogoImage from "./logo-color.png";
import ImgTest from "./img-test.jpg";

import AddCircleIcon from "@material-ui/icons/AddCircle";
const Feed = () => {
  let history = useHistory();

  const goToImageCreatePage = () => {
    history.push("/images/");
  };
  return (
    <PageConteiner>
      <Logo src={LogoImage} />
      <Tittle>Seu perfil</Tittle>
      <ImagesContainer>
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
        <FeedImage src={ImgTest} />
      </ImagesContainer>

      <Footer>
        <Button>
          <AddCircleIcon
            onClick={goToImageCreatePage}
            fontSize="large"
            color="action"
            titleAccess="Adicionar nova imagem"
          />
        </Button>
      </Footer>
    </PageConteiner>
  );
};

export default Feed;
