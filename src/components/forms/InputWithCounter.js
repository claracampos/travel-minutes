import React from "react";
import CharacterCounter from "./CharacterCounter";

const InputWithCounter = props => (
  <div>
    <label>{props.label}: </label>
    <input
      type="text"
      name={props.name}
      defaultValue={props.defaultValue || ""}
      maxLength="100"
      autoComplete="off"
      required
      onChange={e => props.setCount(e.target.value.length)}
    ></input>
    <CharacterCounter count={props.count} />
  </div>
);

export default InputWithCounter;
