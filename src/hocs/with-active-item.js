import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {activeId, loadOffer} from "../store/action";
import {connect} from "react-redux";
import {fetchOffer} from "../store/api-actions";


export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.handleHoverCard = this.handleHoverCard.bind(this);
    }

    componentDidMount(offerId) {
      this.props.loadOfferServer(offerId);
    }

    handleHoverCard(offer, offerId) {
      this.props.setActiveId(offerId);
      this.props.loadOfferActive(offer);
    }

    render() {
      return (<Component
        {...this.props}

        handleHoverCard={this.handleHoverCard}
      >
      </Component>);
    }
  }

  WithActiveItem.propTypes = {
    loadOfferActive: propTypes.func.isRequired,
    setActiveId: propTypes.func.isRequired,
    loadOfferServer: propTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    loadOfferActive(offer) {
      dispatch(loadOffer(offer));
    },
    loadOfferServer(offerId) {
      dispatch(fetchOffer(offerId));
    },
    setActiveId(offerId) {
      dispatch(activeId(offerId));
    }
  });
  return connect(null, mapDispatchToProps)(WithActiveItem);
};
