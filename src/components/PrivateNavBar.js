import React from "react";
import { logout } from "../utils/authentication";

const PrivateNavBar = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/dashboard">
      Travel Minutes
    </a>
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
        <a class="nav-item nav-link" href="/dashboard">
          Dashboard
        </a>
        <a class="nav-item nav-link" href="/add-entry">
          Add Entry
        </a>
        <a class="nav-item nav-link" href="/about">
          About
        </a>
        <a class="nav-item nav-link" href="/help">
          Help
        </a>
        <p class="nav-item nav-link link cursor-pointer" onClick={logout}>
          Log Out
        </p>
      </div>
    </div>
  </nav>
);

export default PrivateNavBar;
