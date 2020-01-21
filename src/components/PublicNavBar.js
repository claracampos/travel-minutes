import React from "react";
import { Link } from "react-router-dom";

const PublicNavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <Link to="/dashboard" className="navbar-brand serif">
      Travel Minutes
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
        <Link to="/about" className="nav-item nav-link">
          About
        </Link>
        <Link to="/help" className="nav-item nav-link">
          Help
        </Link>
      </div>
    </div>
  </nav>
);

export default PublicNavBar;
