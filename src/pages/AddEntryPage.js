import React from "react";
import AddEntryForm from "../components/forms/AddEntryForm";
import GoHomeButton from "../components/GoHomeButton";

const AddEntryPage = () => {
  return (
    <div>
      <h2>Add Entry</h2>
      <AddEntryForm />
      <GoHomeButton>Cancel</GoHomeButton>
    </div>
  );
};

export default AddEntryPage;
