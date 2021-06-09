import { RECEIVE_DOWNVOTES, RECEIVE_VOTES, RECEIVE_UPVOTES } from "../actions/vote_actions";

const initialState = {
    upvotes: 0,
    upUsers: [],
    downvotes: 0,
    downUsers: []
};

const voteReducer = (state = {}, action) => {
        Object.freeze(state);

        switch (action.type) {
            case RECEIVE_VOTES:
                debugger
                return action.votes.data
            default:
                return state;
        }
};

export default voteReducer;