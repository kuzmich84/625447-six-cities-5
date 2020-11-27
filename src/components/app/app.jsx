import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PageMain from "../page-main/page-main";
import PrivateRoute from "../private-route/private-route";
import RouteLoginToMain from "../route-login-to-main/route-login-to-main";
import browserHistory from "../../browser-history";
import {AppRoute, defaultCity} from "../../store/const";

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <PageMain cityName={defaultCity}/>
        </Route>
        <Route exact path={`${AppRoute.CITY}/:cityName`} render={({match}) => {
          const {cityName} = match.params;
          return <PageMain cityName={cityName}/>;
        }}>

        </Route>
        <RouteLoginToMain
          exact
          path={AppRoute.LOGIN}
          render={() => <Login/>}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return <Favorites/>;
          }}
        />
        <Route exact path={`${AppRoute.OFFER}/:offerId`} component={Room}/>
      </Switch>
    </Router>
  );
};

export default App;
