import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../context/AppContext";

const PrivateRoute = props => {
  const { user } = useContext(AppContext);

  return user ? props.component : <Redirect to="/" />;
};

export default PrivateRoute;
