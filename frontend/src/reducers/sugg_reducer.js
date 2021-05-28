import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_SUGG_COMMENTS } from "../actions/comment_actions";
import { RECEIVE_PLAN_SUGGS, RECEIVE_SUGG } from "../actions/sugg_actions";

const initialState = {
    all: [],
    new: []
};

const suggReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLAN_SUGGS:
            
            newState.all = action.suggs.data;
            return newState
        case RECEIVE_SUGG:
            
            newState.new = [action.sugg.data.newSuggestion];
            return newState
        
        default:
            return state;
    }
};

export default suggReducer;