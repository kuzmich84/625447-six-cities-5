import React from "react";
import NearbyCard from "../nearby-card/nearby-card";
import propTypes from "prop-types";


const ListCardsNearby = (props) => {
  const {offers} = props;
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => <NearbyCard offer={offer} key={offer.id}/>)}
    </div>
  );
};

ListCardsNearby.propTypes = {
  offers: propTypes.array.isRequired,
};

export default ListCardsNearby;
