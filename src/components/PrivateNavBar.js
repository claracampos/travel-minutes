import React from "react";
import { logout } from "../utils/authentication";
import { Link } from "react-router-dom";

const PrivateNavBar = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <Link to="/dashboard" class="navbar-brand serif">
      Travel Minutes
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <Link to="/dashboard" class="nav-item nav-link">
          Dashboard
        </Link>
        <Link to="/add-entry" class="nav-item nav-link">
          Add Entry
        </Link>
        <Link to="/about" class="nav-item nav-link">
          About
        </Link>
        <Link to="/help" class="nav-item nav-link">
          Help
        </Link>
        <p class="nav-item nav-link link cursor-pointer" onClick={logout}>
          Log Out
        </p>
      </div>
    </div>
  </nav>
);

export default PrivateNavBar;
