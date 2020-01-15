import React from "react";
import handleEntryFormSubmit from "../actions/addEntryScripts";
import EntryForm from "./EntryForm";

const AddEntryPage = () => {
  return (
    <div>
      <h2>Add Entry</h2>
      <EntryForm action={handleEntryFormSubmit} button={"Add Entry"} />
    </div>
  );
};

export default AddEntryPage;
