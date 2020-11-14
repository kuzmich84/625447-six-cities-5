import React from "react";
import {Redirect, Route} from "react-router-dom";
import propTypes from "prop-types";
import {AuthorizationStatus} from "../../store/const";
import {connect} from "react-redux";


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
