import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import propTypes from "prop-types";
import PageMain from "../pageMain/pageMain";
import PrivateRoute from "../private-route/private-route";

const App = (props) => {
  const {reviews} = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageMain />
        </Route>
        <Route exact path="/city/:cityName" render={({match}) => {
          const {cityName} = match.params;
          return <PageMain cityName={cityName}/>;
        }}>

        </Route>
        <PrivateRoute
          exact
          path = "/login"
          render={()=>{
            return <PageMain />;
          }}
        />
        <Route exact path="/login">
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render = {()=> {
            return <Favorites/>;
          }}
        />
        <Route exact path="/offer/:id" render={({match}) => {
          const {id} = match.params;
          return <Room offerId={id} reviews={reviews} />;
        }}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: propTypes.arrayOf(
      propTypes.object.isRequired),
  reviews: propTypes.arrayOf(
      propTypes.object.isRequired
  )
};

export default App;
