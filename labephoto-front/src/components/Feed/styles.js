import styled from "styled-components";

export const PageConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;
export const Logo = styled.img`
  width: 300px;
  height: 50px;
  margin-top: 88px;
  margin-bottom: 28px;
`;
export const Tittle = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: rgb(95, 99, 104);
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  max-width: 810px;
`;

export const FeedImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 10px;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 -1px 3px 0 rgba(255, 255, 255, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: rgb(255, 255, 255, 0.9);
  display: flex;

  align-items: center;
  flex-direction: column;

  :hover {
    background-color: rgb(255, 255, 255);
  }
`;

export const ButtonIcon = styled.button`
  border-radius: 100%;
  border: 0 none;
  padding: 0;
  margin: 2px 0;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    border: solid 2px rgb(0, 0, 0, 0.1);
  }
`;

export const Legend = styled.span`
  font-size: 12px;
  color: rgb(95, 99, 104);
`;
