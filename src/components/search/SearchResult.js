import React from "react";
import { Link } from "react-router-dom";

const SearchResult = props => {
  const { id, date, place, seen, done, met } = props.entry;
  return (
    <div>
      <p>
        <b>
          {date} - {place}
        </b>
        <Link to={`/edit-entry/${id}`}>Edit</Link>
      </p>
      <p>What I saw: {seen}</p>
      <p>What I did: {done}</p>
      <p>People I met: {met}</p>
    </div>
  );
};

export default SearchResult;
