import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers} from "./mocks/offers";
import {reviews} from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";


const placesCount = offers.length;

const store = createStore(reducer);


const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          placesCount={placesCount}
          offers={offers}
          reviews={reviews}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
