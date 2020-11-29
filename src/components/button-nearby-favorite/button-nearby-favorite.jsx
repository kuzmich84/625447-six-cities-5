import React from "react";
import Button from "../button/button";
import {connect} from "react-redux";
import {toggleFavoriteNearby as toggleFavoriteNearbyAction} from "../../store/api-actions";
import propTypes from "prop-types";
import {getAuthorizationStatus} from "../../store/selectors/user-selectors";
import {AppRoute, AuthorizationStatus} from "../../store/const";
import {redirectToRoute} from "../../store/action";

const ButtonNearbyFavorite = (props) => {
  const {toggleFavoriteNearby, offer, offers, authorizationStatus} = props;

  return <Button disabled={false} {...props} offers={offers}
    onClick={() => toggleFavoriteNearby(offer, offers, authorizationStatus)}/>;
};

ButtonNearbyFavorite.propTypes = {
  toggleFavoriteNearby: propTypes.func.isRequired,
  offer: propTypes.object,
  offers: propTypes.array,
  authorizationStatus: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteNearby(offer, offers, status) {
    return status === AuthorizationStatus.AUTH ? dispatch(toggleFavoriteNearbyAction(offer, offers)) : dispatch(redirectToRoute(AppRoute.LOGIN));
  },
});


export {ButtonNearbyFavorite};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonNearbyFavorite);

