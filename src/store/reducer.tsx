import { combineReducers } from "redux";
import { redirectToTable, refresh } from "./Dashboard/reducer";

const appReducers = combineReducers({ redirectToTable, refresh });
export default appReducers;
