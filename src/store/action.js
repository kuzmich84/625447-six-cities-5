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
  ACTIVE_ID: `ACTIVE_ID`,
  IS_SENDING_REVIEW: `IS_SENDING_REVIEW`,
  IS_SENDING_OFFER: `IS_SENDING_OFFER`,
  GET_ERROR_OFFER: `GET_ERROR_OFFER`,
  SET_ERROR_REVIEWS: `GET_ERROR_REVIEWS`,
  IS_SEND_REVIEW: `IS_SEND_REVIEW`,
  LOAD_EMAIL: `LOAD_EMAIL`,
  LOAD_AVATAR: `LOAD_AVATAR`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
  SET_FAVORITE: `SET_FAVORITE`

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

export const isLoading = (bool) => ({
  type: ActionType.IS_LOADING,
  payload: bool,
});

export const activeId = (id) => ({
  type: ActionType.ACTIVE_ID,
  payload: id,
});


export const isSendingReview = (bool) => ({
  type: ActionType.IS_SENDING_REVIEW,
  payload: bool,
});

export const isSendingOffer = (bool) => ({
  type: ActionType.IS_SENDING_OFFER,
  payload: bool,
});

export const getErrorOffer = (bool) => ({
  type: ActionType.GET_ERROR_OFFER,
  payload: bool,
});

export const setErrorReviews = (bool) => ({
  type: ActionType.SET_ERROR_REVIEWS,
  payload: bool,
});

export const isSendReview = (bool) => ({
  type: ActionType.IS_SEND_REVIEW,
  payload: bool,
});

export const loadEmail = (email) => ({
  type: ActionType.LOAD_EMAIL,
  payload: email,
});

export const loadAvatar = (image) => ({
  type: ActionType.LOAD_AVATAR,
  payload: image,
});

export const loadFavorite = (favoritesOffers) => ({
  type: ActionType.LOAD_FAVORITE,
  payload: favoritesOffers,
});

export const setFavorite = (bool) => ({
  type: ActionType.SET_FAVORITE,
  payload: bool,
});
