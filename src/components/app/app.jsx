import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PageMain from "../page-main/page-main";
import PrivateRoute from "../private-route/private-route";
import RouteLoginToMain from "../route-login-to-main/route-login-to-main";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../store/const";

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <PageMain/>
        </Route>
        <Route exact path={AppRoute.CITY} render={({match}) => {
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
        <Route exact path={`${AppRoute.OFFER}/:id`} render={({match}) => {
          const {id} = match.params;
          return <Room offerId={id}/>;
        }}/>
      </Switch>
    </Router>
  );
};

export default App;
