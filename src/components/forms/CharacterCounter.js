import React from "react";

const CharacterCounter = props => {
  const count = props.count;
  return count ? <p>{count}/100</p> : <p>0/100</p>;
};

export default CharacterCounter;
