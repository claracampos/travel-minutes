import React, { useState } from "react";
import { Link } from "react-router-dom";

const JournalEntry = props => {
  const { id, date, place, seen, done, met } = props.entry;
  const [fullEntry, setFullEntry] = useState(false);
  const buttonText = fullEntry ? "-" : "+";

  return (
    <div className="container-fluid d-flex flex-column border rounded shadow-sm my-2">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <p className="text-wrap lead text-break w-75 pt-2">
          {date} - <span className="h5 serif">{place}</span>
        </p>
        <button
          type="button"
          className="btn btn-sm btn-rounded btn-outline-secondary tiny-button p-0"
          onClick={() => {
            setFullEntry(!fullEntry);
          }}
        >
          {buttonText}
        </button>
      </div>
      {fullEntry && (
        <div className="mb-2">
          <p className="mb-1 text-wrap text-break">
            <b>What I saw:</b> {seen}
          </p>
          <p className="mb-1 text-wrap text-break">
            <b>What I did:</b> {done}
          </p>
          <p className="mb-3 text-wrap text-break">
            <b>People I met:</b> {met}
          </p>
          <Link to={`/edit-entry/${id}`}>Edit entry</Link>
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
