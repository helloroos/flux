import { RECEIVE_COMMENT, RECEIVE_SUGG_COMMENTS, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_PLAN_SUGGS, RECEIVE_SUGG } from "../actions/sugg_actions";

const initialState = {
    all: [],
    new: []
    // comments: []
};

const suggReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLAN_SUGGS:
            newState = action.suggs.data;
            return newState
        case RECEIVE_SUGG:
            debugger
            newState.new = action.sugg.data;
            return newState
        // case RECEIVE_SUGG_COMMENTS:
        //     newState.comments = action.comments.data;
            
        //     return newState
        // case RECEIVE_COMMENT:
            
        //     newState.comments.push(action.comment.data);
        //     return newState
        case REMOVE_COMMENT:
            
            delete newState.comments[action.commentId];
            return newState;
        
        default:
            return state;
    }
};

export default suggReducer;