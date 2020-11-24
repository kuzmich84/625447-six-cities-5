import React from "react";
import Header from "../header/header";
import Main from "../main/main";
import propTypes from "prop-types";


const PageMain = (props) => {
  const {cityName} = props;
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main city={cityName}/>
    </div>
  );
};

PageMain.propTypes = {
  cityName: propTypes.string
};

export default PageMain;
