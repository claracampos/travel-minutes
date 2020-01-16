import React, { useState, useContext, useEffect } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import JournalEntries from "./JournalEntries";

const DashboardPage = () => {
  const { user } = useContext(AppContext);
  const [journalEntries, setJournalEntries] = useState();
  const [sortByOldest, setSortByOldest] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await database.ref(`users/${user}`).once("value");
      const entries = [];

      data.forEach(entry => {
        entries.push({ id: entry.key, ...entry.val() });
      });
      sortByOldest
        ? setJournalEntries(entries.reverse())
        : setJournalEntries(entries);
    };

    fetchData();
  }, [user, sortByOldest]);

  console.log(journalEntries);

  return (
    <div>
      <h1>Dashboard</h1>
      <label>Show: </label>
      <select onChange={() => setSortByOldest(!sortByOldest)}>
        <option value="sort-desc">Most recent first</option>
        <option value="sort-asc">Oldest first</option>
      </select>
      {journalEntries && <JournalEntries entries={journalEntries} />}
    </div>
  );
};

export default DashboardPage;
