import React from "react";

const TextInput = props => {
  return (
    <div>
      <label>{props.label}:</label>
      <input type="text" name={props.name}></input>
    </div>
  );
};

export default TextInput;
