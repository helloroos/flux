import errorsReducer from "./errors_reducer";
import mainReducer from "./main_page_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
import voteReducer from "./upvote_reducers";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer,
    main: mainReducer,
   
});

export default rootReducer;
