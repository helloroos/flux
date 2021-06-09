import * as ApiUtil from '../util/suggestions_api_util';
export const RECEIVE_SUGG = 'RECEIVE_SUGG';
export const RECEIVE_UPVOTES = 'RECEIVE_UPVOTES';
export const RECEIVE_DOWNVOTES = 'RECEIVE_DOWNVOTES';
export const RECEIVE_VOTES = 'RECEIVE_VOTES';

export const receiveSugg = sugg => ({
    type: RECEIVE_SUGG,
    sugg
});

export const receieveUpvotes = upvotes => ({
    type: RECEIVE_UPVOTES,
    upvotes
});

export const receieveDownvotes = downvotes => ({
    type: RECEIVE_DOWNVOTES,
    downvotes
});

export const receieveVotes = votes => ({
    type: RECEIVE_VOTES,
    votes
})

export const upvote = suggId => dispatch => (
    ApiUtil.upvote(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
        // .then(sugg => dispatch(receieveUpvotes(sugg)))
);

export const upvoteRemove = suggId => dispatch => (
    ApiUtil.upvote(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
        // .then(sugg => dispatch(receieveUpvotes(sugg)))
);

export const downvoteRemove = suggId => dispatch => (
    ApiUtil.downvote(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
        // .then(sugg => dispatch(receieveDownvotes(sugg)))
);

export const downvote = suggId => dispatch => (
    ApiUtil.downvote(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
        // .then(sugg => dispatch(receieveDownvotes(sugg)))
);