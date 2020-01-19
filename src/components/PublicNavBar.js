import React from "react";
import { Link } from "react-router-dom";

const PublicNavBar = () => (
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
        <Link to="/about" class="nav-item nav-link">
          About
        </Link>
        <Link to="/help" class="nav-item nav-link">
          Help
        </Link>
      </div>
    </div>
  </nav>
);

export default PublicNavBar;
