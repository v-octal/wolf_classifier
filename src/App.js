import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "whatwg-fetch";
import "./App.css";

const memoized = {};

const memoizedClassList = (baseURL, updateFn) => {
  if (memoized[baseURL]) {
    return;
  }
  memoized[baseURL] = true;
  fetch(`${baseURL}/api/class_list`)
    .then(resp => resp.json())
    .then(classes => {
      updateFn(`I can detect: ${classes.join(", ")}`);
    })
    .catch(() => updateFn("API call to get classes failed...not great..."));
};

function App() {
  const [currentURL, setCurrentURL] = useState(
    "https://vignette.wikia.nocookie.net/gameofthrones/images/9/94/804_Ghost_Profile.png/revision/latest?cb=20190506030424"
  );
  const [currentInput, setCurrentInput] = useState("");
  const [predictions, setPredictions] = useState("");
  const [classMessage, setClassMessage] = useState(
    "Getting a list of classes..."
  );
  const [serverBaseURL, setServerBaseURL] = useState(
    "https://immense-waters-40588.herokuapp.com"
  );

  memoizedClassList(serverBaseURL, setClassMessage);

  const onClick = () => {
    setCurrentURL(currentInput);
    fetch(`${serverBaseURL}/api/classify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: currentInput
      })
    })
      .then(resp => resp.json())
      .then(results => setPredictions(JSON.stringify(results.predictions)))
      .catch(error => setPredictions(`Oops, an error occured: : ${error}`));
  };

  const onChange = e => {
    setCurrentInput(e.target.value);
  };

  const onBlur = e => {
    setServerBaseURL(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wolf Classifier</h1>
        <br></br>
        <img
          src={currentURL}
          style={{ marginBottom: "20px", maxHeight: "400px" }}
          alt="Wolf"
        ></img>

        <div className="container">
          <div className="row">
            <form className="col-sm-12">
              <div className="form-group">
                <label htmlFor="urlInput">
                  Enter the URL of an image of wolf that you'd like to classify:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="urlInput"
                  value={currentInput}
                  onChange={onChange}
                ></input>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClick}
              >
                Predict!
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col-sm-12">{predictions}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
