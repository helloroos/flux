import * as ApiUtil from '../util/suggestions_api_util';
export const RECEIVE_SUGG = 'RECEIVE_SUGG';
export const RECEIVE_UPVOTES = 'RECEIVE_UPVOTES';
export const RECEIVE_DOWNVOTES = 'RECEIVE_DOWNVOTES';
export const RECEIVE_VOTES = 'RECEIVE_VOTES';

export const receiveSugg = sugg => ({
    type: RECEIVE_SUGG,
    sugg
});

export const receiveUpvotes = upvotes => ({
    type: RECEIVE_UPVOTES,
    upvotes
});

export const receiveDownvotes = downvotes => ({
    type: RECEIVE_DOWNVOTES,
    downvotes
});

export const receiveVotes = votes => ({
    type: RECEIVE_VOTES,
    votes
})

export const upvote = suggId => dispatch => (
    ApiUtil.upvote(suggId)
        .then(votes => dispatch(receiveVotes(votes)))
        // .then(votes => dispatch(receieveUpvotes(votes)))
);

export const upvoteRemove = suggId => dispatch => (
    ApiUtil.upvoteRemove(suggId)
        .then(votes => dispatch(receiveVotes(votes)))
        // .then(votes => dispatch(receieveUpvotes(votes)))
);

export const downvoteRemove = suggId => dispatch => (
    ApiUtil.downvoteRemove(suggId)
        .then(votes => dispatch(receiveVotes(votes)))
        // .then(votes => dispatch(receieveDownvotes(votes)))
);

export const downvote = suggId => dispatch => (
    ApiUtil.downvote(suggId)
        .then(votes => dispatch(receiveVotes(votes)))
        // .then(votes => dispatch(receieveDownvotes(votes)))
);