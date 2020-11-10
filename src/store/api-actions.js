import {loadOffers, getOffersOfCity} from "./action";
import {getOffersUtils} from "../utils/utils";
import camelcaseKeys from "camelcase-keys";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(camelcaseKeys(data, {deep: true}))))
    .then(({payload}) => dispatch(getOffersOfCity(getOffersUtils(payload, `Paris`))))
);

