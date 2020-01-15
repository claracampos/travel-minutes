import React, { useState } from "react";
import EditEntryForm from "./EditEntryForm";

const JournalEntry = props => {
  const entry = props.entry;

  const [editability, setEditability] = useState(false);

  if (!editability) {
    return (
      <div>
        <h3>{entry.place}</h3>
        <div>
          <p>What I saw: {entry.seen}</p>
          <p>What I did: {entry.done}</p>
          <p>People I met: {entry.met}</p>
          <button
            onClick={() => {
              setEditability(true);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  if (editability) {
    return (
      <div>
        <EditEntryForm entry={entry} />
        <button onClick={() => setEditability(false)}>Cancel</button>
        <button>Remove</button>
      </div>
    );
  }
};

export default JournalEntry;
