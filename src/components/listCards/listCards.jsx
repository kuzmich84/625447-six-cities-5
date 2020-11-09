import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import {withActiveItem} from "../../hocs/withActiveItem";

const ListCards = (props) => {
  const {offersOfCity, handleHoverCard} = props;

  return offersOfCity.map((offer) => {
    return <Card offer={offer} key={offer.id} handleHoverCard={handleHoverCard}/>;
  });
};

ListCards.propTypes = {
  offersOfCity: PropTypes.array.isRequired,
};

export default withActiveItem(ListCards);
