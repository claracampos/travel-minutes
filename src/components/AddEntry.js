import React from "react";
import TextInput from "./TextInput";

const AddEntry = () => {
  return (
    <div>
      <h2>Add Entry</h2>
      <form>
        <TextInput name="place" label="Place" />
        <TextInput name="seen" label="What I saw" />
        <TextInput name="done" label="What I did" />
        <TextInput name="people" label="People I met" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddEntry;
