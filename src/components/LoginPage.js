import React from "react";
import { login } from "../actions/authentication";

const LoginPage = () => (
  <div>
    <button onClick={login}>Log In</button>
  </div>
);

export default LoginPage;
