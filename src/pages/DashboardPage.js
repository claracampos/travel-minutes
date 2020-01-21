import React, { useState, useContext, useEffect } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import JournalEntriesList from "../components/entries/JournalEntriesList";
import SearchView from "../components/search/SearchView";
import PrivateNavBar from "../components/PrivateNavBar";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

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
    <div className="pb-3">
      <PrivateNavBar />
      <div className="m-3">
        <h1 className="serif text-left pb-3">My Travel Log</h1>
        <div className="container-fluid d-flex flex-row justify-content-start px-0 mb-4">
          <div>
            <Link
              to="/add-entry"
              className="btn btn-primary border rounded-circle shadow-sm mr-2 add-button"
            >
              +
            </Link>
          </div>
          <div>
            <button
              onClick={() => setSearchView(true)}
              className="btn btn-light border border-secondary rounded-pill shadow-sm mr-2"
            >
              Search
            </button>
          </div>
          <div>
            <select
              onChange={() => setSortByNewest(!sortByNewest)}
              className="form-control bg-light border border-secondary rounded-pill shadow-sm"
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
        <div className="d-flex flex-row justify-content-center">
          {entriesOnPage && journalEntries.length - entriesOnPage.length !== 0 && (
            <button
              onClick={() => setPageLength(pageLength + 10)}
              className="btn btn-lg btn-light border shadow-sm w-100 serif"
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
