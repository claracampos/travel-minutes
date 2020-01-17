import React from "react";
import { useHistory } from "react-router-dom";

const GoHomeButton = props => {
  const history = useHistory();
  return <button onClick={() => history.push("/")}>{props.children}</button>;
};

export default GoHomeButton;
