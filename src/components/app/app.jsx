import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import propTypes from "prop-types";
import PageMain from "../pageMain/pageMain";
import PrivateRoute from "../private-route/private-route";
import RouteLoginToMain from "../route-login-to-main/route-login-to-main";

const App = (props) => {
  const {reviews} = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageMain/>
        </Route>
        <Route exact path="/city/:cityName" render={({match}) => {
          const {cityName} = match.params;
          return <PageMain cityName={cityName}/>;
        }}>

        </Route>
        <RouteLoginToMain
          exact
          path="/login"
          render={() => <Login/>}
        />
        <PrivateRoute
          exact
          path="/favorites"
          render={() => {
            return <Favorites/>;
          }}
        />
        <Route exact path="/offer/:id" render={({match}) => {
          const {id} = match.params;
          return <Room offerId={id} reviews={reviews}/>;
        }}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  reviews: propTypes.arrayOf(
      propTypes.object.isRequired),
};

export default App;
