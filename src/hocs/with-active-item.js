import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        offer: {},
      };
      this.handleHoverCard = this.handleHoverCard.bind(this);
    }

    handleHoverCard(offer) {
      this.setState({
        offer,
      });
    }

    render() {
      const {offer} = this.state;

      return (<Component
        {...this.props}
        offer={offer}
        handleHoverCard={this.handleHoverCard}
      >
      </Component>);
    }

  }

  WithActiveItem.propTypes = {
    offer: PropTypes.object,
  };

  return WithActiveItem;
};
