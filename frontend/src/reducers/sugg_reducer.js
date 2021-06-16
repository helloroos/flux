// import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_SUGG_COMMENTS } from "../actions/comment_actions";
import { RECEIVE_PLAN_SUGGS, RECEIVE_SUGG } from "../actions/sugg_actions";

const suggReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = state.slice()

    switch (action.type) {
        case RECEIVE_PLAN_SUGGS:
            
            return action.suggs.data;
        case RECEIVE_SUGG:
            newState.push(action.sugg.data.newSuggestion);
            return newState
        default:
            return state;
    }
};

export default suggReducer;