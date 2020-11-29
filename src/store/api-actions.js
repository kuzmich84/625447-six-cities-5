import {
  activeId, getErrorOffer,
  isLoading, isSendReview, loadAvatar, loadEmail, loadFavorite,
  loadNearby,
  loadOffer,
  loadOffers,
  loadOffersOfCity,
  loadReviews,
  redirectToRoute,
  requireAuthorization, setErrorReviews,
} from "./action";
import {deleteObject, getOfferFavoriteStatus, getOffersUtils, newList} from "../utils/utils";
import camelcaseKeys from "camelcase-keys";
import {APIRoute, AppRoute, AuthorizationStatus, defaultCity} from "./const";
import cogoToast from 'cogo-toast';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(camelcaseKeys(data, {deep: true}))))
    .then(({payload}) => dispatch(loadOffersOfCity(getOffersUtils(payload, defaultCity))))
    .then(({payload}) => dispatch(loadOffer(camelcaseKeys(payload[0], {deep: true}))))
    .catch((error) => cogoToast.error(`Server is not available ${error.message}`))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((error) => cogoToast.error(`User authentication failed ${error.message}`))
);

export const fetchLogin = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadEmail(data.email));
      dispatch(loadAvatar(data.avatar_url));
    })
    .catch((error) => cogoToast.error(`Server is not available ${error.message}`))
  ;
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchLogin()))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => cogoToast.error(`User authentication failed ${error.message}`))
);


export const fetchOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${offerId}`)
    .then(({data}) => {
      dispatch(loadOffer(camelcaseKeys(data, {deep: true})));
    })
    .then(() => dispatch(isLoading(false)))
    .then(() => dispatch(activeId(parseInt(offerId, 10))))

    .catch(({response}) => {
      dispatch(isLoading(false));
      dispatch(getErrorOffer(response.status));
    })
);

export const fetchOfferReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${AppRoute.COMMENTS}/${offerId}`)
    .then(({data}) => dispatch(loadReviews((camelcaseKeys(data, {deep: true})))))
    .catch((error) => cogoToast.error(`Reviews didn't load ${error.message}`))
);

export const fetchOfferNearby = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${offerId}${AppRoute.NEARBY}`)
    .then(({data}) => dispatch(loadNearby((camelcaseKeys(data, {deep: true})))))
    .catch((error) => cogoToast.error(`Nearby room didn't load ${error.message}`))
);

export const commentPost = (offerId, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${AppRoute.COMMENTS}/${offerId}`, {comment, rating})
    .then(() => dispatch(isSendReview(true)))
    .then(() => dispatch(fetchOfferReviews(offerId)))
    .then(() => dispatch(isSendReview(false)))
    .catch(({response}) => dispatch(setErrorReviews(response.status)))
);

const postFavorite = (offer, api) => api.post(`${APIRoute.FAVORITE}/${offer.id}/${getOfferFavoriteStatus(offer.isFavorite)}`);

export const toggleFavoriteRoom = (offer) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(() => dispatch(fetchOffer(offer.id)))
    .catch((error) => cogoToast.error(`Don't add favorite ${error.message}`));
};


export const toggleFavorite = (offer, offers) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(({data}) => dispatch(loadOffers(newList(offers, (camelcaseKeys(data, {deep: true}))))))
    .then(({payload}) => dispatch(loadOffersOfCity(getOffersUtils(payload, offer.city.name))))
    .catch((error) => cogoToast.error(`Don't add favorite ${error.message}`));
};

export const toggleFavoriteNearby = (offer, offers) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(({data}) => dispatch(loadNearby(newList(offers, (camelcaseKeys(data, {deep: true}))))))
    .catch((error) => cogoToast.error(`Don't add favorite ${error.message}`));
};


export const fetchFavorite = () => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) => dispatch(loadFavorite((camelcaseKeys(data, {deep: true})))))
    .catch((error) => cogoToast.error(`Favorite rooms didn't load ${error.message}`));
};

export const toggleFavorites = (offer, favoriteOffers) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(({data}) => dispatch(loadFavorite(deleteObject(favoriteOffers, (camelcaseKeys(data, {deep: true}))))))
    .catch((error) => cogoToast.error(`Don't add favorite ${error.message}`));
};
