import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntriesList = props => {
  const entries = props.entries;

  return (
    <div>
      <h2>Journal Entries:</h2>
      {entries &&
        entries.map(entry => <JournalEntry entry={entry} key={entry.id} />)}
    </div>
  );
};

export default JournalEntriesList;
