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

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(camelcaseKeys(data, {deep: true}))))
    .then(({payload}) => dispatch(loadOffersOfCity(getOffersUtils(payload, defaultCity))))
    .then(({payload}) => dispatch(loadOffer(camelcaseKeys(payload[0], {deep: true}))))
    .catch(({error})=> alert(`${error}`))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

export const fetchLogin = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadEmail(data.email));
      dispatch(loadAvatar(data.avatar_url));
    });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchLogin()))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
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
    .catch(() => {
    })
);

export const fetchOfferNearby = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${offerId}${AppRoute.NEARBY}`)
    .then(({data}) => dispatch(loadNearby((camelcaseKeys(data, {deep: true})))))
    .catch(() => {
    })
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
    .catch(() => {
    });
};


export const toggleFavorite = (offer, offers) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(({data}) => dispatch(loadOffers(newList(offers, (camelcaseKeys(data, {deep: true}))))))
    .then(({payload}) => dispatch(loadOffersOfCity(getOffersUtils(payload, offer.city.name))));
};

export const toggleFavoriteNearby = (offer, offers) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(({data}) => dispatch(loadNearby(newList(offers, (camelcaseKeys(data, {deep: true}))))));
};


export const fetchFavorite = () => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) => dispatch(loadFavorite((camelcaseKeys(data, {deep: true})))));
};

export const toggleFavorites = (offer, favoriteOffers) => (dispatch, _getState, api) => {
  postFavorite(offer, api)
    .then(({data}) => dispatch(loadFavorite(deleteObject(favoriteOffers, (camelcaseKeys(data, {deep: true}))))));

};
