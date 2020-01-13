import React from "react";

const TextInput = props => {
  return (
    <div>
      <label>{props.label}:</label>
      <input type="text" name={props.name} required></input>
    </div>
  );
};

export default TextInput;
