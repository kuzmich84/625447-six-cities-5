export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_OFFERS_OF_CITY: `GET_OFFERS_OF_CITY`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS
  })
};

export const loadOffers = (offers)=> ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const getOffersOfCity = (offers) => ({
  type: ActionType.GET_OFFERS_OF_CITY,
  payload: offers
});
