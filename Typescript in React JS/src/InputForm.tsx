import React, { FormEvent, useState } from "react";

function InputForm() {
  const [input, setInput] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("submitted form data", input);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default InputForm;
