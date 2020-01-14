import React from "react";
import Header from "../components/Header";
import AddEntryPage from "../components/AddEntryPage";
import NotFoundPage from "../components/NotFoundPage";
import DashboardPage from "../components/DashboardPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LandingRoute from "./LandingRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingRoute />
          </Route>
          <Route path="/dashboard">
            <PrivateRoute component={<DashboardPage />} />
          </Route>
          <Route path="/add-entry">
            <PrivateRoute component={<AddEntryPage />} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
