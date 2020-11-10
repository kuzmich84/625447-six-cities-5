import {extend} from "../utils/utils";
import {ActionType} from "./action";
// import {offers} from "../mocks/offers";
import {getOffersUtils} from "../utils/utils";

const defaultCity = `Paris`;

const initialState = {
  city: defaultCity,
  offersOfCity: [],
  offers: [],
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offersOfCity: getOffersUtils(state.offers, state.city)
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.GET_OFFERS_OF_CITY:
      return extend(state, {
        offersOfCity: action.payload
      });
  }
  return state;
};


