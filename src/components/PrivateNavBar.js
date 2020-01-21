import React from "react";
import { logout } from "../utils/authentication";
import { Link } from "react-router-dom";

const PrivateNavBar = () => (
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
        <Link to="/dashboard" className="nav-item nav-link">
          My Travel Log
        </Link>
        <Link to="/add-entry" className="nav-item nav-link">
          Add Entry
        </Link>
        <Link to="/about" className="nav-item nav-link">
          About
        </Link>
        <Link to="/help" className="nav-item nav-link">
          Help
        </Link>
        <p className="nav-item nav-link cursor-pointer m-0" onClick={logout}>
          Log Out
        </p>
      </div>
    </div>
  </nav>
);

export default PrivateNavBar;
