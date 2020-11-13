import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {reviews} from "./mocks/reviews";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchOffersList} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(fetchOffersList());


const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
