import React from "react";

const TextInput = props => {
  return (
    <div>
      {props.label && <label>{props.label}: </label>}
      <input
        type="text"
        name={props.name}
        defaultValue={props.defaultValue || ""}
        required
        maxLength={props.maxLength || 3000}
      ></input>
    </div>
  );
};

export default TextInput;
