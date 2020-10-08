import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import Feed from "../components/Feed";
import CreateImagePage from "../components/CreateImagePage";
import ImageModal from "../components/Feed/ImageModal";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users/login">
          <LoginPage />
        </Route>
        <Route exact path="/users/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/images">
          <CreateImagePage />
        </Route>

        <Route exact path="/images/feed">
          <Feed />
        </Route>

        <Route exact path="/images/:imageId">
          <ImageModal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
