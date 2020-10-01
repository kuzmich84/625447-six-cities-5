import React from "react";
import Main from "../main/main";
import propTypes from "prop-types";

const App = (props) => {
  const {placesCount} = props;
  return (
    <Main placesCount={placesCount}/>
  );
};

App.propTypes = {
  placesCount: propTypes.number.isRequired
};

export default App;
