import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PrivateNavBar from "../components/PrivateNavBar";
import PublicNavBar from "../components/PublicNavBar";
import GoHomeButton from "../components/GoHomeButton";

const ErrorPage = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      {user ? <PrivateNavBar /> : <PublicNavBar />}
      <div className="m-3">
        <h1 className="serif text-left pb-3">Error</h1>
        <p className="lead mb-5">
          The entry you're looking for is not available.
        </p>
        <GoHomeButton>Go Home</GoHomeButton>
      </div>
    </div>
  );
};

export default ErrorPage;
