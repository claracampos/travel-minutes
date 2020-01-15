import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TextInput from "./TextInput";
import { editEntry } from "../actions/entryActions";

const EditEntryForm = props => {
  const { user } = useContext(AppContext);
  const { place, seen, done, met, id } = props.entry;

  return (
    <div>
      <form
        id="edit-entry-form"
        onSubmit={e => {
          editEntry(e, user, id);
        }}
      >
        <TextInput name="place" defaultValue={place} />
        <TextInput name="seen" defaultValue={seen} />
        <TextInput name="done" defaultValue={done} />
        <TextInput name="met" defaultValue={met} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default EditEntryForm;
