import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
import plansReducer from './plans_reducer';
import suggReducer from "./sugg_reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer,
    plans: plansReducer,
    suggs: suggReducer
});

export default rootReducer;
