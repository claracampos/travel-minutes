import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LandingRoute from "./LandingRoute";
import AddEntryPage from "../pages/AddEntryPage";
import EditEntryPage from "../pages/EditEntryPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";
import HelpPage from "../pages/HelpPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingRoute />
          </Route>
          <Route exact path="/dashboard">
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          </Route>
          <Route exact path="/add-entry">
            <PrivateRoute>
              <AddEntryPage />
            </PrivateRoute>
          </Route>
          <Route path="/edit-entry/:id">
            <PrivateRoute>
              <EditEntryPage />
            </PrivateRoute>
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/help">
            <HelpPage />
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
