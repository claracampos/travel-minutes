import React from "react";
import { useHistory } from "react-router-dom";

const GoHomeButton = props => {
  const history = useHistory();
  return (
    <button
      onClick={() => history.push("/")}
      type="button"
      className="btn btn-light border rounded-pill shadow-sm"
    >
      {props.children}
    </button>
  );
};

export default GoHomeButton;
