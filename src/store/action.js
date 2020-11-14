export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_OF_CITY: `GET_OFFERS_OF_CITY`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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
