export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_OF_CITY: `GET_OFFERS_OF_CITY`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEAR_BY: `LOAD_NEAR_BY`,
  IS_LOADING: `IS_LOADING`,
  ACTIVE_ID: `ACTIVE_ID`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffersOfCity = (offers) => ({
  type: ActionType.LOAD_OFFERS_OF_CITY,
  payload: offers,
});

export const changeFilter = (value) => ({
  type: ActionType.CHANGE_FILTER,
  payload: value,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const loadNearby = (nearby) => ({
  type: ActionType.LOAD_NEAR_BY,
  payload: nearby,
});

export const isLoading = () => ({
  type: ActionType.IS_LOADING,
});

export const activeId = (id) => ({
  type: ActionType.ACTIVE_ID,
  payload: id,
});
