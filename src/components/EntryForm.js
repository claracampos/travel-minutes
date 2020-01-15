import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TextInput from "./TextInput";

const EntryForm = props => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <form
        id="add-entry-form"
        onSubmit={e => {
          props.action(e, user);
        }}
      >
        <TextInput name="place" label="Place" />
        <TextInput name="seen" label="What I saw" />
        <TextInput name="done" label="What I did" />
        <TextInput name="people" label="People I met" />
        <button>{props.button}</button>
      </form>
    </div>
  );
};

export default EntryForm;
