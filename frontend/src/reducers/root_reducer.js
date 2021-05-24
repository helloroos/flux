const { combineReducers } = require("redux");
const { default: uiReducer } = require("./ui_reducer");

const rootReducer = combineReducers({
    ui: uiReducer
});

export default rootReducer;
