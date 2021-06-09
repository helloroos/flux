
import { RECEIVE_PLAN_SUGGS } from "../actions/sugg_actions";
import { RECEIVE_DOWNVOTES, RECEIVE_VOTES, RECEIVE_UPVOTES } from "../actions/vote_actions";

const initialState = {
    upvotes: 0,
    upUsers: [],
    downvotes: 0,
    downUsers: []
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
            case RECEIVE_VOTES:
                
                return action.votes.data
            default:
                return state;
        }
};

export default voteReducer;