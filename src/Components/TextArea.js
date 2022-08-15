import React, { useState } from "react";

export default function TextArea(props) {
  const handleOnclickUp = () => {
    let newText=text.toUpperCase(text);
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here");
  return (
    <>
      <div className="textArea">
        <label htmlFor="myText" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="myText"
          rows="7"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        style={{ marginTop: "10px" }}
        onClick={handleOnclickUp}
      >
        Convetr to uppercase
      </button>
    </>
  );
}
