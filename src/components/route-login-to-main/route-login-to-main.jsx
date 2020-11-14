import React from "react";
import {Redirect, Route} from "react-router-dom";
import {AuthorizationStatus} from "../../store/const";
import propTypes from "prop-types";
import {connect} from "react-redux";


const RouteLoginToMain = (props) => {

  const {authorizationStatus} = props;


  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={`/`}/>;
  } else {
    return <Route {...props} />;
  }

};

RouteLoginToMain.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {RouteLoginToMain};
export default connect(mapStateToProps)(RouteLoginToMain);


