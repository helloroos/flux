import { combineReducers } from "redux";
import plansReducer from './plans_reducer';
import suggReducer from "./sugg_reducer";


const mainReducer = combineReducers({
    plans: plansReducer,
    suggs: suggReducer
});

export default mainReducer;