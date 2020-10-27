import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {offers} from "../mocks/offers";
import {getOffersUtils} from "../utils/utils";

const initialState = {
  city: `Paris`,
  offersOfCity: getOffersUtils(offers, `Paris`),
  offers,
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
  }
  return state;
};

