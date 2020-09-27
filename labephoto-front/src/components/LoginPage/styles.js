import styled from "styled-components";

export const PageConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;
export const Logo = styled.img`
  width: 240px;
  height: 40px;
  margin-top: 88px;
  margin-bottom: 28px;
`;
export const Tittle = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: rgb(95, 99, 104);
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
`;
export const Button = styled.button`
  width: 328px;
  height: 42px;
  background-color: rgb(244, 244, 244); /*google*/
  border-color: rgb(95, 99, 104);
  border-width: 5px;
  color: rgb(95, 99, 104);
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 16px;
  margin-top: 16px;
  border: none;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  :hover {
    cursor: pointer;
    background-color: rgb(244, 244, 244, 0.6);
    text-decoration: underline;
  }
`;

export const Button2 = styled.button`
  width: 115px;
  height: 35px;
  background-color: white;
  border-color: rgb(95, 99, 104);

  color: rgb(95, 99, 104);
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 14px;

  border: none;
  border: none;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
