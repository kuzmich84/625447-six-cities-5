import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const placesCount = 320;

const init = () => {
  ReactDOM.render(
      <App placesCount={placesCount} />,
      document.querySelector(`#root`)
  );
};

init();
