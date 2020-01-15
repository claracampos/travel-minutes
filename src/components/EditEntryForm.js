import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TextInput from "./TextInput";
import { editEntry } from "../actions/entryActions";
import { useHistory } from "react-router-dom";

const EditEntryForm = props => {
  const { user } = useContext(AppContext);
  const { place, seen, done, met, id } = props.entry;
  const history = useHistory();

  return (
    <div>
      <form
        id="edit-entry-form"
        onSubmit={e => {
          editEntry(e, user, id, () => history.push("/dashboard"));
        }}
      >
        <TextInput name="place" label="Place" defaultValue={place} />
        <TextInput name="seen" label="What I saw" defaultValue={seen} />
        <TextInput name="done" label="What I did" defaultValue={done} />
        <TextInput name="met" label="People I met" defaultValue={met} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default EditEntryForm;
