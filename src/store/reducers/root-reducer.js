import {combineReducers} from "redux";
import {loadData} from "./load-data/load-data";
import {appProcess} from "./app-process/app-process";
import {user} from "./user/user";
import {offerData} from "./offer-data/offer-data";

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`,
  OFFER: `OFFER`
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.APP]: appProcess,
  [NameSpace.USER]: user,
  [NameSpace.OFFER]: offerData
});

