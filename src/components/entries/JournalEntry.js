import React, { useState } from "react";
import { Link } from "react-router-dom";

const JournalEntry = props => {
  const { id, date, place, seen, done, met } = props.entry;
  const [fullEntry, setFullEntry] = useState(false);
  const buttonText = fullEntry ? "-" : "+";

  return (
    <div class="container-fluid d-flex flex-column border rounded shadow-sm my-2">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <p class="text-wrap lead text-break w-75 pt-2">
          {date} - <span class="h5 serif">{place}</span>
        </p>
        <button
          type="button"
          class="btn btn-sm btn-rounded btn-outline-secondary tiny-button p-0"
          onClick={() => {
            setFullEntry(!fullEntry);
          }}
        >
          {buttonText}
        </button>
      </div>
      {fullEntry && (
        <div class="mb-2">
          <p class="mb-1 text-wrap text-break">
            <b>What I saw:</b> {seen}
          </p>
          <p class="mb-1 text-wrap text-break">
            <b>What I did:</b> {done}
          </p>
          <p class="mb-3 text-wrap text-break">
            <b>People I met:</b> {met}
          </p>
          <Link to={`/edit-entry/${id}`}>Edit entry</Link>
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
