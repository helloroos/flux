import * as ApiUtil from '../util/suggestions_api_util';
export const RECEIVE_SUGG = 'RECEIVE_SUGG';

export const receiveSugg = sugg => ({
    type: RECEIVE_SUGG,
    sugg
});

export const upvote = suggId => dispatch => (
    ApiUtil.upvote(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
);

export const downvote = suggId => dispatch => (
    ApiUtil.downvote(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
);

export const upvoteRemove = suggId => dispatch => (
    ApiUtil.upvoteRemove(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
);

export const downvoteRemove = suggId => dispatch => (
    ApiUtil.downvoteRemove(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
);