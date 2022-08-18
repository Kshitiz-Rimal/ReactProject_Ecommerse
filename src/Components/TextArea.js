import React, { useState } from "react";

export default function TextArea(props) {
  const handleOnclickUp = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
  };
  const handleOnclickLo = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here");
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="textArea" >
        <label htmlFor="myText" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="myText"
          rows="7"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <div className="container" >
        <button
          className="btn btn-primary"
          style={{
            marginTop: "10px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
          onClick={handleOnclickUp}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary"
          style={{
            marginTop: "10px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
          onClick={handleOnclickLo}
        >
          Convert to Lower case
        </button>
      </div>
      <h2>Your Text Summary</h2>
      <p>
        <b>
          {text.length} characters and {text.split(" ").length} Words
        </b>
      </p>
    </div>
  );
}
