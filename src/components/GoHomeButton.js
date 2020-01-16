import React from "react";
import { useHistory } from "react-router-dom";

const GoHomeButton = props => {
  const history = useHistory();
  return (
    <button onClick={() => history.push("/dashboard")}>{props.children}</button>
  );
};

export default GoHomeButton;
