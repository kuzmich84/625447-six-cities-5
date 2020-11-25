import React from "react";
import Button from "../button/button";
import {connect} from "react-redux";
import {toggleFavoriteNearby as toggleFavoriteNearbyAction} from "../../store/api-actions";
import propTypes from "prop-types";

const ButtonNearbyFavorite = (props) => {
  const {toggleFavoriteNearby, offer, offers} = props;

  return <Button disabled={false} {...props} offers={offers} onClick={() => toggleFavoriteNearby(offer, offers)}/>;
};

ButtonNearbyFavorite.propTypes = {
  toggleFavoriteNearby: propTypes.func.isRequired,
  offer: propTypes.object,
  offers: propTypes.array,
};


const mapDispatchToProps = (dispatch) => ({
  toggleFavoriteNearby(offer, offers) {
    dispatch(toggleFavoriteNearbyAction(offer, offers));
  }
});


export {ButtonNearbyFavorite};
export default connect(null, mapDispatchToProps)(ButtonNearbyFavorite);

