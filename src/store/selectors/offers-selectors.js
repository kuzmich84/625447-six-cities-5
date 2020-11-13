import {createSelector} from "reselect";

export const getOffers = (state)=> state.DATA.offers;
export const getOffersOfCity = (state) => state.APP.offersOfCity;
export const getCity = (state) => state.APP.city;
export const getFilterValue = (state) => state.APP.value;


export const getFilteredOffersOfCity = createSelector([getOffersOfCity, getFilterValue], (offers, value) => {

  switch (value) {
    case `to-high`:
      return offers.slice().sort((prev, next) => prev.price - next.price);
    case `to-low`:
      return offers.slice().sort((prev, next) => next.price - prev.price);
    case `top-rated`:
      return offers.slice().sort((prev, next) => next.rating - prev.rating);
    default:
      return offers;
  }
});
