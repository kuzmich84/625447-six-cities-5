import React, {PureComponent} from "react";
import Card from "../card/card";
import PropTypes from "prop-types";


class ListCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: {},
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(offer) {
    this.setState({
      offer,
    });
  }


  render() {
    const {offers} = this.props;

    return offers.map((offer) => {
      return <Card offer={offer} key={offer.id} handleHover={this.handleHover}/>;
    });
  }
}

ListCards.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default ListCards;
