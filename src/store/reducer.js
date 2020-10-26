import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {getOffers} from "../utils/utils";
import {offers} from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offers: getOffers(offers, `Paris`)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: getOffers(action.payload)
      });
  }
  return state;
};

