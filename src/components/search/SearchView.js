import React, { useState } from "react";
import SearchResultsList from "./SearchResultsList";
import { searchEntries } from "../../utils/entryUtils";
import PrivateNavBar from "../PrivateNavBar";

const SearchView = props => {
  const { journalEntries, setSearchView } = props;
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="d-flex justify-content-center bg-light">
      <div className="main-container shadow-lg">
        <PrivateNavBar />
        <div className="p-4">
          <h1 className="serif text-left">My Travel Log</h1>
          <div>
            <button
              onClick={() => {
                setSearchView(false);
              }}
              className="btn btn-sm btn-primary rounded-pill mb-2"
            >
              Go back
            </button>
          </div>
          <div>
            <div className="d-flex flex-row bg-light border rounded p-2">
              <label className="lead mr-2">Search: </label>
              <input
                onChange={e => {
                  searchEntries(e, journalEntries, setSearchResults);
                }}
                className="form-control flex-grow-1"
              ></input>
            </div>
            <div className="p-1">
              {searchResults ? (
                <SearchResultsList results={searchResults} />
              ) : (
                <p>Enter your search term above.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
