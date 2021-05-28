
import { RECEIVE_PLAN_SUGGS } from "../actions/sugg_actions";
import { RECEIVE_DOWNVOTES, RECEIVE_UPVOTES } from "../actions/vote_actions";

const initialState = {
    all: [],
    new: [],
    comments: []
};

const commentsReducer = (state = initialState, action) => {
        Object.freeze(state);
        let newState = Object.assign({}, state);

        switch (action.type) {
            case RECEIVE_DOWNVOTES:
                debugger
                newState.comments = action.comments.data;
                return newState
            case RECEIVE_UPVOTES:
                debugger
                newState.comments.concat({[action.comment.data.comment.suggestion[0]]: [action.comment.data.comment]});
                return newState
            // case REMOVE_SUGG:
                
            //     delete newState.comments[action.comment.data];
            //     return newState;
            // case RECEIVE_PLAN_SUGGS:
            //     action.suggs.data.forEach(suggestion => {
            //         newState.comments.push({ [suggestion._id]: suggestion.comments })
            //     })
            //     // action.suggs.data.comments;
                
            //     return newState;
            default:
                return state;
        }
};

export default commentsReducer;