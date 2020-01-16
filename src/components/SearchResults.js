import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  const results = props.results;

  return results.length === 0 ? (
    <p>Your search did not match any entries.</p>
  ) : (
    results.map(entry => <SearchResult entry={entry} key={entry.id} />)
  );
};

export default SearchResults;
