import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("onverted to uppercase", "success")
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  };
  const handlecrearClick = () => {
    let newText = "";
    setText(newText)
  };
  const handleOnChang = (e) => {
    setText(e.target.value);
  }
  const [text, setText] = useState("");
  return (<>
    
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2> {props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleOnChang}
          style={{ backgroundColor: props.mode === 'light' ? 'gray' : 'white' }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>
        Convert to lovercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handlecrearClick}>
        clear text
      </button>
    </div>
  </>
  );
}
