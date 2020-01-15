import React from "react";

const JournalEntry = props => {
  const { place, seen, done, people } = props.entry;

  return (
    <div>
      <h3>{place}</h3>
      <div>
        <p>What I saw: {seen}</p>
        <p>What I did: {done}</p>
        <p>People I met: {people}</p>
        <a href="/edit">Edit</a>
      </div>
    </div>
  );
};

export default JournalEntry;
