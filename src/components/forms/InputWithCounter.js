import React from "react";
import CharacterCount from "./CharacterCount";

const InputWithCounter = props => {
  return (
    <div>
      {props.label && <label>{props.label}: </label>}
      <input
        type="text"
        name={props.name}
        defaultValue={props.defaultValue || ""}
        required
        maxLength={100}
        autoComplete="off"
        onChange={e => props.setCount(e.target.value.length)}
      ></input>
      <CharacterCount count={props.count} />
    </div>
  );
};

export default InputWithCounter;
