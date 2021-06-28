import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_SUGG_COMMENTS } from "../actions/comment_actions";
import { RECEIVE_PLAN_SUGGS } from "../actions/sugg_actions";

const initialState = {
    comments: []
};

const commentsReducer = (state = initialState, action) => {
        Object.freeze(state);
        let newState = Object.assign({}, state);

        switch (action.type) {
            case RECEIVE_SUGG_COMMENTS:
                newState.comments = action.comments.data;
                return newState
            case RECEIVE_COMMENT:
                newState.comments.concat([action.comment.data.comment])
                return newState
            case REMOVE_COMMENT:
                
                let filtered = newState.comments.filter(el => el._id !== action.comment.data.commentId)
                return filtered;
            default:
                return state;
        }
};

export default commentsReducer;