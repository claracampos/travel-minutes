import React, { useState, useContext, useEffect } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import JournalEntriesList from "../components/entries/JournalEntriesList";
import SearchView from "../components/search/SearchView";
import PrivateNavBar from "../components/PrivateNavBar";
import LoadingSpinner from "../components/LoadingSpinner";

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
      <PrivateNavBar />
      <div class="m-3">
        <h1 class="serif text-left pb-3">My Travel Log</h1>
        <div class="container-fluid d-flex flex-row justify-content-start px-0 mb-4">
          <div>
            <button
              onClick={() => setSearchView(true)}
              class="btn btn-light border rounded-pill shadow-sm px-4 mr-2"
            >
              Search
            </button>
          </div>
          <div>
            <select
              onChange={() => setSortByNewest(!sortByNewest)}
              class="form-control bg-light border rounded-pill shadow-sm"
            >
              <option defaultValue="newest">View newest first</option>
              <option value="oldest">View oldest first</option>
            </select>
          </div>
        </div>
        <div>
          {!journalEntries && <LoadingSpinner />}
          {entriesOnPage && <JournalEntriesList entries={entriesOnPage} />}
        </div>
        <div class="d-flex flex-row justify-content-center">
          {entriesOnPage && journalEntries.length - entriesOnPage.length !== 0 && (
            <button
              onClick={() => setPageLength(pageLength + 10)}
              class="btn btn-lg btn-light border shadow-sm w-100 serif"
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
