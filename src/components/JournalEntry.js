import React, { useContext } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";

const JournalEntry = () => {
  const { user } = useContext(AppContext);

  database
    .ref(`users/${user}`)
    .once("value")
    .then(snapshot => {
      const entries = [];
      snapshot.forEach(entry =>
        entries.push({ id: entry.key, ...entry.val() })
      );
      console.log(entries);
    })
    .catch(e => console.log("Error", e));

  return <h1>Journal entry</h1>;
};

export default JournalEntry;
