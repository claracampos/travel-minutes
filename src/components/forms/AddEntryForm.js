import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppContext from "../../context/AppContext";
import InputWithCounter from "./InputWithCounter";
import { addEntry } from "../../utils/entryUtils";
import GoHomeButton from "../GoHomeButton";

const AddEntryForm = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();
  const [seenInputCount, setSeenInputCount] = useState(0);
  const [doneInputCount, setDoneInputCount] = useState(0);
  const [metInputCount, setMetInputCount] = useState(0);
  const [date, setDate] = useState();

  return (
    <div className="mt-4 font-italic text-center">
      <form
        onSubmit={e => {
          addEntry(e, user, date, () => history.push("/dashboard"));
        }}
      >
        <div className="d-flex flex-row align-items-center flex-wrap mb-3 justify-content-center">
          <div className="d-flex flex-column form-group my-0 mr-1">
            <label className="my-0">Pick a date:</label>
            <DatePicker selected={date} onChange={setDate} required />
          </div>
          <div className="d-flex flex-column form-group flex-grow-1 my-2">
            <label className="my-0">Place: </label>
            <input name="place" maxLength={50} required autoComplete="off" />
          </div>
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
        <div className="mb-3">
          <InputWithCounter
            name="met"
            label="People I met"
            setCount={setMetInputCount}
            count={metInputCount}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded-pill shadow-sm mr-2"
        >
          Add Entry
        </button>
        <GoHomeButton>Cancel</GoHomeButton>
      </form>
    </div>
  );
};

export default AddEntryForm;
