import React from "react";
import AddEntryForm from "../components/forms/AddEntryForm";
import PrivateNavBar from "../components/PrivateNavBar";

const AddEntryPage = () => {
  return (
    <div>
      <PrivateNavBar />
      <div className="m-3">
        <h1 className="serif text-center h2">Add Entry</h1>
        <AddEntryForm />
      </div>
    </div>
  );
};

export default AddEntryPage;
