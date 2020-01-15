import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import TextInput from "./TextInput";
import { addEntry } from "../actions/entryActions";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEntryForm = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();
  const [date, setDate] = useState();

  return (
    <div>
      <form
        id="add-entry-form"
        onSubmit={e => {
          addEntry(e, user, date, () => history.push("/dashboard"));
        }}
      >
        <label>Date: </label>
        <DatePicker selected={date} onChange={setDate} required />

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
