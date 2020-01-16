import React, { useState, useContext, useEffect } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import JournalEntries from "./JournalEntries";
import SearchView from "./SearchView";
import PaginationFooter from "./PaginationFooter";

const DashboardPage = () => {
  const { user } = useContext(AppContext);
  const [journalEntries, setJournalEntries] = useState();
  const [sortByOldest, setSortByOldest] = useState(false);
  const [searchView, setSearchView] = useState();
  const [pagination, setPagination] = useState({ start: 0, end: 2 });
  const [entriesOnPage, setEntriesOnPage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await database.ref(`users/${user}`).once("value");
      const entries = [];

      data.forEach(entry => {
        entries.push({ id: entry.key, ...entry.val() });
      });

      if (sortByOldest) {
        entries.reverse();
      }
      setJournalEntries(entries);
      setEntriesOnPage(entries.slice(pagination.start, pagination.end));
    };

    fetchData();
  }, [user, sortByOldest, pagination]);

  if (!searchView) {
    return (
      <div>
        <h1>Dashboard</h1>
        <label>Show: </label>
        <select onChange={() => setSortByOldest(!sortByOldest)}>
          <option value="sort-desc">Most recent first</option>
          <option value="sort-asc">Oldest first</option>
        </select>
        <button onClick={() => setSearchView(true)}>Search</button>
        {!journalEntries && <h1>Loading...</h1>}
        {entriesOnPage && <JournalEntries entries={entriesOnPage} />}
        {entriesOnPage && (
          <PaginationFooter
            pagination={pagination}
            setPagination={setPagination}
            entriesLength={entriesOnPage.length}
          />
        )}
      </div>
    );
  } else {
    return <SearchView entries={journalEntries} action={setSearchView} />;
  }
};

export default DashboardPage;
