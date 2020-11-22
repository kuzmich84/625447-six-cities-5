import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {favorite} from "../store/api-actions";


export const withSetFavoriteButton = (Component) => {
  class WithSetFavoriteButton extends PureComponent {
    constructor(props) {
      super(props);
      this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton() {
      const {setFavorite, activeId, isFavorite} = this.props;
      setFavorite(activeId, isFavorite);
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
    activeId: propTypes.number,
    isFavorite: propTypes.bool,
  };


  const mapDispatchToProps = (dispatch) => ({
    setFavorite(offerId, isFavorite) {
      dispatch(favorite(offerId, isFavorite));
    },
  });
  return connect(null, mapDispatchToProps)(WithSetFavoriteButton);
};
