import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    ui: uiReducer,
    session: sessionReducer
});

export default rootReducer;
