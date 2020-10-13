import React, {PureComponent} from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


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
    const {offers} = this.props;

    return offers.map((offer) => {
      return <Card offer={offer} key={offer.id} handleHoverCard={this.handleHoverCard}/>;
    });
  }
}

ListCards.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default ListCards;
