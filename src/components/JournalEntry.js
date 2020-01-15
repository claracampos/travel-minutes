import React, { useState } from "react";
import { Link } from "react-router-dom";

const JournalEntry = props => {
  const { id, place, seen, done, met } = props.entry;
  const [fullEntry, setFullEntry] = useState(false);
  const buttonText = fullEntry ? "Hide" : "Show";

  return (
    <div>
      <h3>{place}</h3>
      <button
        onClick={() => {
          setFullEntry(!fullEntry);
        }}
      >
        {buttonText}
      </button>
      {fullEntry && (
        <div>
          <p>What I saw: {seen}</p>
          <p>What I did: {done}</p>
          <p>People I met: {met}</p>
          <Link to={`/edit-entry/${id}`}>Edit</Link>
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
