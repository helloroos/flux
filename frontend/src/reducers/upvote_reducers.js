
import { RECEIVE_PLAN_SUGGS } from "../actions/sugg_actions";
import { RECEIVE_DOWNVOTES, RECEIVE_UPVOTES } from "../actions/vote_actions";

const initialState = {
    upvotes: [],
    downvotes: [],
};

const voteReducer = (state = {}, action) => {
        Object.freeze(state);
        let newState = Object.assign({}, state)

        switch (action.type) {
            case RECEIVE_DOWNVOTES:
                newState.downvotes =  action.downvotes.data;
                return newState
            case RECEIVE_UPVOTES:
                newState.upvotes = action.upvotes.data;
                return newState;
            default:
                return state;
        }
};

export default voteReducer;