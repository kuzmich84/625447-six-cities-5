import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import {withActiveItem} from "../../hocs/with-active-item";
import {connect} from "react-redux";
import {getActiveId, getCity, getFilteredOffersOfCity, getOffers} from "../../store/selectors/offers-selectors";
import {TypeCard} from "../../store/const";
import {withSetFavoriteButton} from "../../hocs/with-set-favorite-button";


const ListCards = (props) => {
  const {handleHoverCard, filteredOffersOfCity, offers, handleClickButton, handleHoverOutCard} = props;
  return filteredOffersOfCity.map((offer) => {
    return <Card
      offer={offer}
      key={offer.id}
      handleClickButton={handleClickButton}
      handleHoverCard={handleHoverCard} o
      ffers={offers}
      typeCard={TypeCard.CITIES}
      handleHoverOutCard={handleHoverOutCard}/>;
  });
};

ListCards.propTypes = {
  filteredOffersOfCity: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredOffersOfCity: getFilteredOffersOfCity(state),
  activeId: getActiveId(state),
  activeCity: getCity(state),
  offers: getOffers(state),
});


export {ListCards};
export default connect(mapStateToProps, null)(withActiveItem(withSetFavoriteButton(ListCards)));
