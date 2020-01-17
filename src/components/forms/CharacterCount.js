import React from "react";

const CharacterCount = props => {
  const count = props.count;
  return count ? <p>{count}/100</p> : <p>0/100</p>;
};

export default CharacterCount;
