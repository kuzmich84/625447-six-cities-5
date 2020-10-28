import React, {PureComponent} from "react";
import Card from "../components/card/card";
import PropTypes from "prop-types";


const withActiveItem = (Component) => {
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
      const {offersOfCity} = this.props;
      const {offer} = this.state;

      return (<Component
        {...this.props}
        offer={offer}
      >
        {offersOfCity.map((offerItem) => {
          return <Card offer={offerItem} key={offer.id} handleHoverCard={this.handleHoverCard}/>;
        })}
      </Component>);
    }
  }

  WithActiveItem.propTypes = {
    offersOfCity: PropTypes.array.isRequired,
  };

};


export default withActiveItem;


