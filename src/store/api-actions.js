import {loadOffers, loadOffersOfCity, requireAuthorization} from "./action";
import {getOffersUtils} from "../utils/utils";
import camelcaseKeys from "camelcase-keys";
import {AuthorizationStatus} from "./const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(camelcaseKeys(data, {deep: true}))))
    .then(({payload}) => dispatch(loadOffersOfCity(getOffersUtils(payload, `Paris`))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
