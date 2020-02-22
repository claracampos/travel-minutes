import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PrivateNavBar from "../components/PrivateNavBar";
import PublicNavBar from "../components/PublicNavBar";
import photo from "../media/photo.jpg";

const AboutPage = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="d-flex justify-content-center bg-light">
      <div className="main-container shadow-lg">
        {user ? <PrivateNavBar /> : <PublicNavBar />}
        <div className="p-4">
          <h1 className="serif text-left pb-3">About</h1>
          <p className="text-center">
            <i>Travel Minutes</i> was developed by:
          </p>
          <div className="d-flex flex-column align-items-center mb-1">
            <img
              className="rounded-circle photo"
              src={photo}
              alt="Clara Campos"
            />
            <p className="font-weight-bold text-secondary m-0">Clara Campos</p>

            <p className="font-weight-light text-secondary m-0">
              Prince Edward Island, Canada
            </p>
            <p>
              <a
                href="https://github.com/claracampos"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1"
              >
                GitHub
              </a>
              |
              <a
                href="https://claralearnstocode.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 mr-1"
              >
                Blog
              </a>
              |
              <a
                href="https://claracampos.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1"
              >
                Website
              </a>
            </p>
          </div>
          <p className="text-justify">
            This web-application was built on React, designed with Bootstrap and
            connected to Firebase for authentication and data storage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
