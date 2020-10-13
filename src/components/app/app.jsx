import React from "react";
import Main from "../main/main";
import propTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import {offersPropTypes, reviewsPropTypes} from "../../customPropTypes/customPropTypes";

const App = (props) => {
  const {placesCount, offers, reviews} = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} offers={offers}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers}/>
        </Route>
        <Route exact path="/offer/:id" render={({match}) => {
          const {id} = match.params;
          return <Room offerId={id} reviews={reviews} offers={offers}/>;
        }}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  placesCount: propTypes.number.isRequired,
};
App.propTypes = offersPropTypes;
App.propTypes = reviewsPropTypes;

export default App;
