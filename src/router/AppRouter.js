import React from "react";
import Header from "../components/Header";
import AddEntryPage from "../components/AddEntryPage";
import EditEntryPage from "../components/EditEntryPage";
import ErrorPage from "../components/ErrorPage";
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
          <Route path="/edit-entry/:id">
            <PrivateRoute component={<EditEntryPage />} />
          </Route>
          <Route path="/error">
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
