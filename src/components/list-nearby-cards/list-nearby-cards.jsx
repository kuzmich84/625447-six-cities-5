import React from "react";
import propTypes from "prop-types";
import Card from "../card/card";
import {TypeCard} from "../../store/const";
import {withActiveItem} from "../../hocs/with-active-item";


const ListCardsNearby = (props) => {
  const {nearbyOffers, handleHoverCard} = props;
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((offer) => <Card typeCard={TypeCard.NEAR_BY} offers={nearbyOffers} offer={offer} key={offer.id} handleHoverCard={handleHoverCard}/>)}
    </div>
  );
};

ListCardsNearby.propTypes = {
  nearbyOffers: propTypes.array.isRequired,
  handleHoverCard: propTypes.func.isRequired,
};

export default withActiveItem(ListCardsNearby);
