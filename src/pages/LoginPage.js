import React from "react";
import { login } from "../utils/authentication";

const LoginPage = () => (
  <div>
    <button onClick={login}>Log In</button>
  </div>
);

export default LoginPage;
