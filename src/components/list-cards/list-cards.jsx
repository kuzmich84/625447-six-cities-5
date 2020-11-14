import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import {withActiveItem} from "../../hocs/with-active-item";
import {connect} from "react-redux";
import {getFilteredOffersOfCity} from "../../store/selectors/offers-selectors";

const ListCards = (props) => {
  const {handleHoverCard, filteredOffersOfCity} = props;
  return filteredOffersOfCity.map((offer) => {
    return <Card offer={offer} key={offer.id} handleHoverCard={handleHoverCard}/>;
  });
};

ListCards.propTypes = {
  filteredOffersOfCity: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  filteredOffersOfCity: getFilteredOffersOfCity(state),
});

export {ListCards};
export default connect(mapStateToProps)(withActiveItem(ListCards));
