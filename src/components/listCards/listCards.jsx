import React, {PureComponent} from "react";
import Card from "../card/card";
import PropTypes from "prop-types";


class ListCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
  }


  render() {
    const {offers} = this.props;

    return offers.map((offer) => {
      return <Card offer={offer} key={offer.id}/>;
    });
  }
}

ListCards.propTypes = {
  offers: PropTypes.array.isRequired
};

export default ListCards;
