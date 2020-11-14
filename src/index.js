import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {reviews} from "./mocks/reviews";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {checkAuth, fetchOffersList} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./store/const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect))
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}/>
      </Provider>,
      document.querySelector(`#root`));
};


Promise.all([
  store.dispatch(fetchOffersList()),
  store.dispatch(checkAuth()),
])
  .then(init);
