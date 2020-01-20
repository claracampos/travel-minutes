import React from "react";
import AddEntryForm from "../components/forms/AddEntryForm";
import GoHomeButton from "../components/GoHomeButton";
import PrivateNavBar from "../components/PrivateNavBar";

const AddEntryPage = () => {
  return (
    <div>
      <PrivateNavBar />
      <div class="m-3">
        <h1 class="serif text-center h2">Add Entry</h1>
        <AddEntryForm />
      </div>
    </div>
  );
};

export default AddEntryPage;
