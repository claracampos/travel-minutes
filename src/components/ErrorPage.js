import React from "react";
import GoHomeButton from "./GoHomeButton";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
      <h2>The page you're looking for is not available.</h2>
      <GoHomeButton>Go Home</GoHomeButton>
    </div>
  );
};

export default ErrorPage;
