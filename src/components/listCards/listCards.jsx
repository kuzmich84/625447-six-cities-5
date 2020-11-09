import React, {PureComponent} from "react";
import Card from "../card/card";
import PropTypes from "prop-types";


class ListCards extends PureComponent {
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

    return offersOfCity.map((offer) => {
      return <Card offer={offer} key={offer.id} handleHoverCard={this.handleHoverCard}/>;
    });
  }
}

ListCards.propTypes = {
  offersOfCity: PropTypes.array.isRequired,
};

export default ListCards;
