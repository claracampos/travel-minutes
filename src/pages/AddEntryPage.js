import React from "react";
import AddEntryForm from "../components/forms/AddEntryForm";
import PrivateNavBar from "../components/PrivateNavBar";

const AddEntryPage = () => {
  return (
    <div className="d-flex justify-content-center bg-light">
      <div className="main-container shadow-lg">
        <PrivateNavBar />
        <div className="py-4 px-5">
          <h1 className="serif text-center h2">Add Entry</h1>
          <AddEntryForm />
        </div>
      </div>
    </div>
  );
};

export default AddEntryPage;
