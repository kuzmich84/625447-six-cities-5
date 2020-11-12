import {combineReducers} from "redux";
import {loadData} from "./load-data/load-data";
import {offersProcess} from "./offers-process/offers-process";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.PROCESS]: offersProcess,
});

