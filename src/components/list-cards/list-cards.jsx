import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import {withActiveItem} from "../../hocs/with-active-item";
import {connect} from "react-redux";
import {getActiveId, getFilteredOffersOfCity} from "../../store/selectors/offers-selectors";
import {TypeCard} from "../../store/const";


const ListCards = (props) => {
  const {handleHoverCard, filteredOffersOfCity, activeId} = props;
  return filteredOffersOfCity.map((offer) => {
    return <Card offer={offer} key={offer.id} handleHoverCard={handleHoverCard} activeId={activeId} typeCard={TypeCard.CITIES}/>;
  });
};

ListCards.propTypes = {
  filteredOffersOfCity: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredOffersOfCity: getFilteredOffersOfCity(state),
  activeId: getActiveId(state),
});


export {ListCards};
export default connect(mapStateToProps, null)(withActiveItem(ListCards));
