import {createSelector} from "reselect";
import {Index, Filter} from "../const";

export const getOffers = (state) => state.DATA.offers;
export const getOffersOfCity = (state) => state.APP.offersOfCity;
export const getCity = (state) => state.APP.city;
export const getFilterValue = (state) => state.APP.value;
export const getReviews = (state) => state.OFFER.reviews;
export const getOffer = (state) => state.OFFER.offer;
export const getNearbyOffers = (state) => state.OFFER.nearby;
export const getActiveId = (state) => state.OFFER.activeId;
export const getIsLoading = (state) => state.OFFER.isLoading;
export const getIsSending = (state) => state.OFFER.isSending;


export const getFilteredOffersOfCity = createSelector([getOffersOfCity, getFilterValue], (offers, value) => {
  switch (value) {
    case Filter.TO_HIGH:
      return offers.slice().sort((prev, next) => prev.price - next.price);
    case Filter.TO_LOW:
      return offers.slice().sort((prev, next) => next.price - prev.price);
    case Filter.TOP_RATED:
      return offers.slice().sort((prev, next) => next.rating - prev.rating);
    default:
      return offers;
  }
});

export const getSortedReviewsOfDate = createSelector(getReviews, (reviews) => {
  return reviews.slice(Index.start, Index.end).sort((prev, next) => Date.parse(next.date) - Date.parse(prev.date));
});


