import React, { useState } from "react";
import { searchEntries } from "../../utils/entryUtils";
import SearchResultsList from "./SearchResultsList";

const SearchView = props => {
  const entries = props.entries;
  const setSearchView = props.action;
  const [searchResults, setSearchResults] = useState();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Search</h2>
      <button
        onClick={() => {
          setSearchView(false);
        }}
      >
        Go back
      </button>
      <br></br>
      <label>Search: </label>
      <input
        onChange={e => {
          searchEntries(e, entries, setSearchResults);
        }}
      ></input>
      {searchResults && <SearchResultsList results={searchResults} />}
      {!searchResults && <p>Enter your search term above.</p>}
    </div>
  );
};

export default SearchView;
