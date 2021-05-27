import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_PLAN_SUGGS, RECEIVE_SUGG } from "../actions/sugg_actions";

const initialState = {
    planSuggs: undefined,
    new: undefined,
    comments: undefined,
    comment: undefined
};

const suggReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLAN_SUGGS:
            newState.planSuggs = action.suggs.data;
            return newState
        case RECEIVE_SUGG:
            debugger
            newState.new = action.sugg.data;
            return newState
        case RECEIVE_COMMENT:
            debugger
            newState.comment = action.comment.data;
            return newState
        case REMOVE_COMMENT:
            debugger
            delete newState[action.commentId];
            return newState;
        
        default:
            return state;
    }
};

export default suggReducer;