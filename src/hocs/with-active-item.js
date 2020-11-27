import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {activeId, loadHoverOffer as loadHoverOfferAction} from "../store/action";
import {connect} from "react-redux";


export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.handleHoverCard = this.handleHoverCard.bind(this);
      this.handleHoverOutCard = this.handleHoverOutCard.bind(this);
    }

    handleHoverCard(offer, offerId) {
      this.props.setActiveId(parseInt(offerId, 10));
      this.props.loadHoverOffer(offer);
    }

    handleHoverOutCard() {
      this.props.setActiveId(null);
      this.props.loadHoverOffer({});
    }

    render() {
      return (<Component
        {...this.props}

        handleHoverCard={this.handleHoverCard}
        handleHoverOutCard={this.handleHoverOutCard}
      >
      </Component>);
    }
  }

  WithActiveItem.propTypes = {
    setActiveId: propTypes.func.isRequired,
    loadHoverOffer: propTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    loadHoverOffer(offer) {
      dispatch(loadHoverOfferAction(offer));
    },
    setActiveId(offerId) {
      dispatch(activeId(offerId));
    },
  });
  return connect(null, mapDispatchToProps)(WithActiveItem);
};
