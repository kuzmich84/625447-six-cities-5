import {extend, getOffersUtils} from "../../../utils/utils";
import {ActionType} from "../../action";

const defaultCity = `Paris`;

const initialState = {
  city: defaultCity,
  offersOfCity: [],

};


export const offersProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offersOfCity: getOffersUtils(state.offers, state.city),
      });
    case ActionType.LOAD_OFFERS_OF_CITY:
      return extend(state, {
        offersOfCity: action.payload,
      });
  }
  return state;
};


