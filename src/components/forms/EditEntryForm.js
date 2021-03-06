import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import InputWithCounter from "./InputWithCounter";
import GoHomeButton from "../GoHomeButton";
import { editEntry, deleteEntry } from "../../utils/entryUtils";

const EditEntryForm = props => {
  const { user } = useContext(AppContext);
  const { seen, done, met, id } = props.entry;
  const history = useHistory();
  const [seenInputCount, setSeenInputCount] = useState(seen.length);
  const [doneInputCount, setDoneInputCount] = useState(done.length);
  const [metInputCount, setMetInputCount] = useState(met.length);

  return (
    <div className="font-italic">
      <form
        onSubmit={e => {
          editEntry(e, user, id, () => history.push("/dashboard"));
        }}
      >
        <div>
          <InputWithCounter
            name="seen"
            label="What I saw"
            defaultValue={seen}
            setCount={setSeenInputCount}
            count={seenInputCount}
          />
        </div>
        <div>
          <InputWithCounter
            name="done"
            label="What I did"
            defaultValue={done}
            setCount={setDoneInputCount}
            count={doneInputCount}
          />
        </div>
        <div>
          <InputWithCounter
            name="met"
            label="People I met"
            defaultValue={met}
            setCount={setMetInputCount}
            count={metInputCount}
          />
        </div>
        <div className="d-flex flex-column align-items-center w-100 mt-2">
          <div>
            <GoHomeButton>Cancel</GoHomeButton>
            <button
              type="submit"
              className="btn btn-primary rounded-pill shadow-sm px-4 ml-2"
            >
              Save
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                deleteEntry(user, id, () => history.push("/dashboard"))
              }
              className="btn btn-link mt-2"
            >
              Delete Entry
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEntryForm;
