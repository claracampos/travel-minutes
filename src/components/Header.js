import React from "react";
import { logout } from "../actions/authentication";

export const Header = () => {
  return (
    <div>
      <h1>Travel Journal</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Header;
