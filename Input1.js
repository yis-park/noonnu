import React, { useState } from "react";
import Child from "./Child";

function Input1() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <Child handleChange={handleChange} />
      <h2>{text}</h2>
    </div>
  );
}

export default Input1;
