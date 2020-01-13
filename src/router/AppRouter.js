import React from "react";
import Header from "../components/Header";
import AddEntry from "../components/AddEntry";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/add-entry" component={AddEntry} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
