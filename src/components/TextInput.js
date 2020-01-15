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
      ></input>
    </div>
  );
};

export default TextInput;
