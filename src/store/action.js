export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_OF_CITY: `GET_OFFERS_OF_CITY`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_FILTER: `CHANGE_FILTER`,
};

export const getOffers = () => ({
  type: ActionType.GET_OFFERS,
});

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
