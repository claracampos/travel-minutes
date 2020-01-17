import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppContext from "../../context/AppContext";
import InputWithCounter from "./InputWithCounter";
import { addEntry } from "../../utils/entryUtils";

const AddEntryForm = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();
  const [seenInputCount, setSeenInputCount] = useState(0);
  const [doneInputCount, setDoneInputCount] = useState(0);
  const [metInputCount, setMetInputCount] = useState(0);
  const [date, setDate] = useState();

  return (
    <div>
      <form
        onSubmit={e => {
          addEntry(e, user, date, () => history.push("/dashboard"));
        }}
      >
        <div>
          <label>Date: </label>
          <DatePicker selected={date} onChange={setDate} required />
        </div>
        <div>
          <label>Place: </label>
          <input name="place" maxLength={50} required autoComplete="off" />
        </div>
        <div>
          <InputWithCounter
            name="seen"
            label="What I saw"
            setCount={setSeenInputCount}
            count={seenInputCount}
          />
        </div>
        <div>
          <InputWithCounter
            name="done"
            label="What I did"
            setCount={setDoneInputCount}
            count={doneInputCount}
          />
        </div>
        <div>
          <InputWithCounter
            name="met"
            label="People I met"
            setCount={setMetInputCount}
            count={metInputCount}
          />
        </div>
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default AddEntryForm;
