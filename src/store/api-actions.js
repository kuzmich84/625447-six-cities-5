import {loadOffers, loadOffersOfCity, redirectToRoute, requireAuthorization} from "./action";
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
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
