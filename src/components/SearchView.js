import React, { useState } from "react";
import { searchEntries } from "../actions/entryActions";
import SearchResults from "./SearchResults";

const SearchView = props => {
  const entries = props.entries;
  const setSearch = props.action;
  const [searchResults, setSearchResults] = useState();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Search</h2>
      <button
        onClick={() => {
          setSearchResults();
          setSearch(false);
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
      {searchResults && <SearchResults results={searchResults} />}
      {!searchResults && <p>Enter your search term above.</p>}
    </div>
  );
};

export default SearchView;
