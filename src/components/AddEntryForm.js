import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TextInput from "./TextInput";
import { addEntry } from "../actions/entryActions";
import { useHistory } from "react-router-dom";

const AddEntryForm = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  return (
    <div>
      <form
        id="add-entry-form"
        onSubmit={e => {
          addEntry(e, user, history.push("/dashboard"));
        }}
      >
        <TextInput name="place" label="Place" />
        <TextInput name="seen" label="What I saw" />
        <TextInput name="done" label="What I did" />
        <TextInput name="met" label="People I met" />
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default AddEntryForm;
