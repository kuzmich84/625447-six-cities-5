import React from "react";
import Main from "../main/main";
import propTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";


const App = (props) => {
  const {placesCount, offers} = props;
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
          <Favorites/>
        </Route>
        <Route exact path="/offer/:id" component={Room}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  placesCount: propTypes.number.isRequired,
  offers: propTypes.array.isRequired,
  reviews: propTypes.array.isRequired
};

export default App;
