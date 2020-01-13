import React from "react";
import login from "../actions/login";

const LoginPage = () => (
  <div>
    <button onClick={login}>Log In</button>
  </div>
);

export default LoginPage;
