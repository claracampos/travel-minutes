import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import InputWithCounter from "./InputWithCounter";
import { editEntry } from "../../utils/entryUtils";
import { useHistory } from "react-router-dom";

const EditEntryForm = props => {
  const { user } = useContext(AppContext);
  const { seen, done, met, id } = props.entry;
  const history = useHistory();
  const [seenCount, setSeenCount] = useState(seen.length);
  const [doneCount, setDoneCount] = useState(done.length);
  const [metCount, setMetCount] = useState(met.length);

  return (
    <div>
      <form
        id="edit-entry-form"
        onSubmit={e => {
          editEntry(e, user, id, () => history.push("/dashboard"));
        }}
      >
        <InputWithCounter
          name="seen"
          label="What I saw"
          defaultValue={seen}
          setCount={setSeenCount}
          count={seenCount}
        />
        <InputWithCounter
          name="done"
          label="What I did"
          defaultValue={done}
          setCount={setDoneCount}
          count={doneCount}
        />
        <InputWithCounter
          name="met"
          label="People I met"
          defaultValue={met}
          setCount={setMetCount}
          count={metCount}
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default EditEntryForm;
