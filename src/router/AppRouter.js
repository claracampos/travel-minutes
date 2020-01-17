import React from "react";
import Header from "../components/Header";
import AddEntryPage from "../pages/AddEntryPage";
import EditEntryPage from "../pages/EditEntryPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";
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
          <Route exact path="/dashboard">
            <PrivateRoute component={<DashboardPage />} />
          </Route>
          <Route exact path="/add-entry">
            <PrivateRoute component={<AddEntryPage />} />
          </Route>
          <Route path="/edit-entry/:id">
            <PrivateRoute component={<EditEntryPage />} />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
