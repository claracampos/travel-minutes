import React from "react";
import { Link } from "react-router-dom";

const SearchResult = props => {
  const { id, date, place, seen, done, met } = props.entry;
  return (
    <div className="border-bottom border-secondary py-1 text-wrap text-break ">
      <p className="m-0">
        <b className="mr-3">
          {date} - {place}
        </b>
        <Link to={`/edit-entry/${id}`}>Edit</Link>
      </p>
      <p className="m-0">
        <i>What I saw:</i> {seen}
      </p>
      <p className="m-0">
        <i>What I did:</i> {done}
      </p>
      <p className="m-0">
        <i>People I met:</i> {met}
      </p>
    </div>
  );
};

export default SearchResult;
