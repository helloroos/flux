import { combineReducers } from "redux";
import commentsReducer from "./comments_reducer";
import plansReducer from './plans_reducer';
import suggReducer from "./sugg_reducer";


const mainReducer = combineReducers({
    plans: plansReducer,
    suggs: suggReducer,
    comments: commentsReducer
});

export default mainReducer;