import React from "react";
import CharacterCounter from "./CharacterCounter";

const InputWithCounter = props => (
  <div class="form-group d-flex flex-column my-0">
    <label class="my-0">{props.label}: </label>
    <textarea
      type="text"
      name={props.name}
      defaultValue={props.defaultValue || ""}
      maxLength="100"
      autoComplete="off"
      required
      onChange={e => props.setCount(e.target.value.length)}
    ></textarea>
    <CharacterCounter count={props.count} />
  </div>
);

export default InputWithCounter;
