import React from "react";
import { login } from "../utils/authentication";
import PublicNavBar from "../components/PublicNavBar";
import logo from "../media/logo.jpg";

const LoginPage = () => (
  <div className="container-fluid vh-100 m-0 p-0">
    <PublicNavBar />
    <div className="d-flex h-75 flex-column justify-content-center align-items-center text-center mt-4">
      <img src={logo} alt="logo" className="logo pb-4"></img>
      <h1 className="serif">Travel Minutes</h1>
      <h2 className="lead">A minimalist travel journal.</h2>
      <button
        onClick={login}
        className="btn btn-light btn-outline-secondary rounded-pill shadow-sm px-4 mt-3 "
      >
        Log In
      </button>
    </div>
  </div>
);

export default LoginPage;
