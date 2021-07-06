import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePicturePage from "../pages/createPicturePage/CreatePicturePage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PicturesPage from "../pages/picturesPage/PicturesPage";
import LoginPage from "../pages/loginPage/LoginPage";
import SignupPage from "../pages/signupPage/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Pic4Share-frontend/login">
          <LoginPage />
        </Route>
        <Route exact path="/Pic4Share-frontend/signup">
          <SignupPage />
        </Route>
        <Route exact path="/Pic4Share-frontend">
          <PicturesPage />
        </Route>
        <Route exact path="/Pic4Share-frontend/create">
          <CreatePicturePage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
