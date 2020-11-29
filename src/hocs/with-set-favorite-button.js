import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {toggleFavorite} from "../store/api-actions";
import {getAuthorizationStatus} from "../store/selectors/user-selectors";
import {AppRoute, AuthorizationStatus} from "../store/const";
import {redirectToRoute} from "../store/action";


export const withSetFavoriteButton = (Component) => {
  class WithSetFavoriteButton extends PureComponent {
    constructor(props) {
      super(props);
      this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton() {
      const {setFavorite, offer, offers, authorizationStatus} = this.props;
      setFavorite(offer, offers, authorizationStatus);
    }

    render() {
      return (<Component
        {...this.props}

        onClick={this.handleClickButton}
      >
      </Component>);
    }
  }

  WithSetFavoriteButton.propTypes = {
    setFavorite: propTypes.func.isRequired,
    offer: propTypes.object,
    offers: propTypes.array,
    authorizationStatus: propTypes.string.isRequired,
  };

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatus(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    setFavorite(offer, offers, status) {
      return status === AuthorizationStatus.AUTH ? dispatch(toggleFavorite(offer, offers)) : dispatch(redirectToRoute(AppRoute.LOGIN));
    },
  });
  return connect(mapStateToProps, mapDispatchToProps)(WithSetFavoriteButton);
};
