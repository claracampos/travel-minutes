import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Error</h1>
      <h2>The page you're looking for is not available.</h2>
      <button
        onClick={() => {
          history.replace("/");
        }}
      >
        Go home
      </button>
    </div>
  );
};

export default ErrorPage;
