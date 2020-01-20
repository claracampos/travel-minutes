import React from "react";

const CharacterCounter = props => {
  const count = props.count;
  return count ? (
    <p class="mb-1 text-right text-primary">{count}/100</p>
  ) : (
    <p class="mb-1 text-right">0/100</p>
  );
};

export default CharacterCounter;
