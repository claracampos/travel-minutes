import React from "react";
import { Link } from "react-router-dom";

const PublicNavBar = () => (
  <div>
    <div>
      <Link to="/about">About</Link>
    </div>
    <div>
      <Link to="/about">Help</Link>
    </div>
  </div>
);

export default PublicNavBar;
