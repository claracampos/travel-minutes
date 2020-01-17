import React, { useState, useContext, useEffect } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import JournalEntriesList from "../components/entries/JournalEntriesList";
import SearchView from "../components/search/SearchView";

const DashboardPage = () => {
  const { user } = useContext(AppContext);
  const [journalEntries, setJournalEntries] = useState();
  const [entriesOnPage, setEntriesOnPage] = useState();
  const [pageLength, setPageLength] = useState(10);
  const [sortByNewest, setSortByNewest] = useState(true);
  const [searchView, setSearchView] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await database.ref(`users/${user}/entries`).once("value");
      const entries = [];

      data.forEach(entry => {
        entries.push({ id: entry.key, ...entry.val() });
      });
      if (sortByNewest) {
        entries.reverse();
      }
      setJournalEntries(entries);
      setEntriesOnPage(entries.slice(0, pageLength));
    };

    fetchData();
  }, [user, sortByNewest, pageLength]);

  if (searchView) {
    return (
      <SearchView
        journalEntries={journalEntries}
        setSearchView={setSearchView}
      />
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <label>Show: </label>
        <select onChange={() => setSortByNewest(!sortByNewest)}>
          <option defaultValue="newest">Most recent first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
      <div>
        <button onClick={() => setSearchView(true)}>Search</button>
      </div>
      <div>
        {!journalEntries && <h1>Loading...</h1>}
        {entriesOnPage && <JournalEntriesList entries={entriesOnPage} />}
      </div>
      <div>
        {entriesOnPage &&
          journalEntries.length - entriesOnPage.length !== 0 && (
            <button onClick={() => setPageLength(pageLength + 10)}>
              See More
            </button>
          )}
      </div>
    </div>
  );
};

export default DashboardPage;
