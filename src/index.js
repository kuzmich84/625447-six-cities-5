import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers} from "./mocks/offers";
import {reviews} from "./mocks/reviews";


const placesCount = offers.length;

const init = () => {
  ReactDOM.render(
      <App
        placesCount={placesCount}
        offers={offers}
        reviews={reviews}/>,
      document.querySelector(`#root`)
  );
};

init();
