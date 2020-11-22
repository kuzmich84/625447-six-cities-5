import {
  activeId, getError, getErrorOffer, getErrorReviews,
  isLoading, isSendingReview, isSendReview, loadAvatar, loadEmail,
  loadNearby,
  loadOffer,
  loadOffers,
  loadOffersOfCity,
  loadReviews,
  redirectToRoute,
  requireAuthorization, setErrorReviews, setFavorite,
} from "./action";
import {getOffersUtils} from "../utils/utils";
import camelcaseKeys from "camelcase-keys";
import {APIRoute, AppRoute, AuthorizationStatus, defaultCity} from "./const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(camelcaseKeys(data, {deep: true}))))
    .then(({payload}) => dispatch(loadOffersOfCity(getOffersUtils(payload, defaultCity))))
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
      dispatch(setFavorite(camelcaseKeys(data).isFavorite));
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

export const commentPost = (offerId, {comment, rating}, func) => (dispatch, _getState, api) => (
  api.post(`${AppRoute.COMMENT}/${offerId}`, {comment, rating})
    .then(() => dispatch(isSendReview(true)))
    .then(() => dispatch(fetchOfferReviews(offerId)))
    .then(() => console.log(`false`))
    .catch(({response}) => dispatch(setErrorReviews(response.status)))
);

export const favorite = (offerId, isFavorite) => (dispatch, _getState, api) => {
  if (isFavorite) {
    api.post(`${APIRoute.FAVORITE}/${offerId}/${0}`)
      .then(() => dispatch(setFavorite(false)))
      .catch(() => {
      });
  } else {
    api.post(`${APIRoute.FAVORITE}/${offerId}/${1}`)
      .then(() => dispatch(setFavorite(true)))
      .catch(() => {
      });
  }

};
