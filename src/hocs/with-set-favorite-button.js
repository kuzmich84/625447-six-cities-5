import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {toggleFavorite} from "../store/api-actions";


export const withSetFavoriteButton = (Component) => {
  class WithSetFavoriteButton extends PureComponent {
    constructor(props) {
      super(props);
      this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton() {
      const {setFavorite, offer} = this.props;
      setFavorite(offer);
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
    offer: propTypes.object.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    setFavorite(offer) {
      dispatch(toggleFavorite(offer));
    },
  });
  return connect(null, mapDispatchToProps)(WithSetFavoriteButton);
};
