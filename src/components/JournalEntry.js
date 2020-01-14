import React from "react";

const JournalEntry = props => {
  const { place, saw, done, people } = props.entry;

  return (
    <div>
      <h3>{place}</h3>
      <div>
        <p>What I saw: {saw}</p>
        <p>What I did: {done}</p>
        <p>People I met: {people}</p>
      </div>
    </div>
  );
};

export default JournalEntry;
