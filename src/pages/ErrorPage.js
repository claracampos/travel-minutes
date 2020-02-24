import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PrivateNavBar from "../components/PrivateNavBar";
import PublicNavBar from "../components/PublicNavBar";
import GoHomeButton from "../components/GoHomeButton";

const ErrorPage = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="d-flex justify-content-center bg-light">
      <div className="main-container shadow-lg">
        {user ? <PrivateNavBar /> : <PublicNavBar />}{" "}
        <div className="p-4">
          <h1 className="serif text-left pb-3">Error</h1>
          <p className="lead mb-5">Something went wrong.</p>
          <GoHomeButton>Go Home</GoHomeButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
