import React from "react";
import AddEntryForm from "./AddEntryForm";
import GoHomeButton from "./GoHomeButton";

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
