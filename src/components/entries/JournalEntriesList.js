import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntriesList = props => {
  const entries = props.entries;

  return (
    <div>
      {entries &&
        entries.map(entry => <JournalEntry entry={entry} key={entry.id} />)}
    </div>
  );
};

export default JournalEntriesList;
