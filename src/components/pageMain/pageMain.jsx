import React from "react";
import Header from "../header/header";
import Main from "../main/main";

const PageMain = (props) => {
  const {cityName} = props;
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main cityName={cityName}/>
    </div>
  );
};

export default PageMain;
