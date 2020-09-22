import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import CreateImagePage from "../components/CreateImagePage";
import ImageDetailsPage from "../components/ImageDetailsPage";

const Router = () => {
  ////////****MUDAR OS NOME DAS ROTAS
  ////////DE HOME PARA /IMAGES
  /////////E DE CRIAR PARA /IMAGES/CREATE
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/users/login">
          <LoginPage />
        </Route>

        <Route exact path="/images">
          <CreateImagePage />
        </Route>

        <Route exact path="/images/feed">
          <HomePage />
        </Route>

        <Route exact path="/images/:id">
          <ImageDetailsPage />
        </Route>

        <Route path="*">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
