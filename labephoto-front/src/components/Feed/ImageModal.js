import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import useAuthorization from "../../hooks/useAuthorization";
import { ContainerImageDetails } from "./ImageModalStyle";

function ImageModal() {
  useAuthorization();
  const { imageId } = useParams();
  console.log(imageId);
  const history = useHistory();

  const token = localStorage.getItem("token");

  const [image, setImage] = useState([]);

  useEffect(() => {
    getImageDetails();
  }, []);

  const getImageDetails = async () => {
    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const response = await axios.get(
        `http://localhost:3000/images/${imageId}`,
        axiosConfig
      );
      console.log(response.data);
      setImage(response.data);
    } catch (err) {
      console.log("erro ao abrir a imagem");
    }
  };

  return (
    <ContainerImageDetails>
      <div className="img-infos">
        <p>{image.subtitle}</p>
        <p>{image.collection}</p>
      </div>

      <div className="image">
        <img alt={image.subtitle} src={image.file} />
      </div>
    </ContainerImageDetails>
  );
}

export default ImageModal;
