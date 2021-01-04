import React from "react";

import { Route, Switch } from "react-router-dom";

import { MainPage } from "./mainPage/mainPage";

function RouterApp() {
  return (
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/contactUs" component={MainPage} />
        <Route path="/signIn" component={MainPage} />
        <Route path="/createAccount" component={MainPage} />
      </Switch>
  );
}

export default RouterApp;
