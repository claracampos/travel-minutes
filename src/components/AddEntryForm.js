import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import InputWithCounter from "./InputWithCounter";
import { addEntry } from "../actions/entryActions";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEntryForm = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();
  const [date, setDate] = useState();
  const [seenCount, setSeenCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [metCount, setMetCount] = useState(0);
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

        <label>Place: </label>
        <input name="place" maxLength={50} required autoComplete="off" />
        <InputWithCounter
          name="seen"
          label="What I saw"
          setCount={setSeenCount}
          count={seenCount}
        />

        <InputWithCounter
          name="done"
          label="What I did"
          setCount={setDoneCount}
          count={doneCount}
        />
        <InputWithCounter
          name="met"
          label="People I met"
          setCount={setMetCount}
          count={metCount}
        />
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default AddEntryForm;
