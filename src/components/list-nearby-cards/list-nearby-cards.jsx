import React from "react";
import propTypes from "prop-types";
import Card from "../card/card";
import {TypeCard} from "../../store/const";


const ListCardsNearby = (props) => {
  const {offers} = props;
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => <Card typeCard={TypeCard.NEAR_BY} offer={offer} key={offer.id}/>)}
    </div>
  );
};

ListCardsNearby.propTypes = {
  offers: propTypes.array.isRequired,
};

export default ListCardsNearby;
