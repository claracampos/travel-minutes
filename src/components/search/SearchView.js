import React, { useState } from "react";
import SearchResultsList from "./SearchResultsList";
import { searchEntries } from "../../utils/entryUtils";

const SearchView = props => {
  const { journalEntries, setSearchView } = props;
  const [searchResults, setSearchResults] = useState();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Search</h2>
      <div>
        <button
          onClick={() => {
            setSearchView(false);
          }}
        >
          Go back
        </button>
      </div>
      <div>
        <label>Search: </label>
        <input
          onChange={e => {
            searchEntries(e, journalEntries, setSearchResults);
          }}
        ></input>
      </div>
      <div>
        {searchResults ? (
          <SearchResultsList results={searchResults} />
        ) : (
          <p>Enter your search term above.</p>
        )}
      </div>
    </div>
  );
};

export default SearchView;
