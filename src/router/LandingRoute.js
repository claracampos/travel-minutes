import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../context/AppContext";
import LoginPage from "../pages/LoginPage";

const LandingRoute = () => {
  const { user } = useContext(AppContext);

  return user ? <Redirect to="/dashboard" /> : <LoginPage />;
};

export default LandingRoute;
