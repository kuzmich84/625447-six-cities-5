import {extend} from "../utils/utils";
import {ActionType} from "./action";


const defaultCity = `Paris`;

const initialState = {
  city: defaultCity,
  offersOfCity: [],
  offers: [],
  value: `popular`,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_OFFERS_OF_CITY:
      return extend(state, {
        offersOfCity: action.payload,
      });

    case ActionType.CHANGE_FILTER:
      return extend(state, {
        value: action.payload,
      });
  }
  return state;
};


