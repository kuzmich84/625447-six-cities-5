import {createSelector} from "reselect";


export const getOffersOfCity = (state) => state.offersOfCity;
export const getCity = (state) => state.city;
export const filterValue = (state) => state.value;


export const getFilteredOffersOfCity = createSelector([getOffersOfCity, filterValue], (offers, value) => {

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
