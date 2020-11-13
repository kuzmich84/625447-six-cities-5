import {combineReducers} from "redux";
import {loadData} from "./load-data/load-data";
import {appProcess} from "./app-process/app-process";

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.APP]: appProcess,
});

