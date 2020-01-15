import React from "react";
import { logout } from "../actions/authentication";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Travel Journal</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/add-entry">Add Entry</Link>

      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Header;
