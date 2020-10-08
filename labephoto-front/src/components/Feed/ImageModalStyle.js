import styled from "styled-components";

export const ContainerImageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  .img-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 1em;
    color: rgb(95, 99, 104);
    p {
      margin: 5px 0px;
    }
  }
  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    width: 300px;

    img {
      border-radius: 2px;
      margin-bottom: 1em;
      width: 100%;
    }
  }
`;
