import * as APIUtil from '../util/suggestions_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_SUGG_COMMENTS = 'RECEIVE_SUGG_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receieveSuggComments = comments => ({
    type: RECEIVE_SUGG_COMMENTS,
    comments
});

// export const fetchSuggComments = (planId) => dispatch => (
    // SuggApiUtil.showSuggComments(planId)
    //     .then(suggs => dispatch(receiveSuggComments(suggs)))
    //     .catch(err => dispatch(receiveSuggErrors(err)))
// );

export const createComment = (comment, suggId) => dispatch => (
    APIUtil.createComment(comment, suggId)
        .then(comment => dispatch(receiveComment(comment)))
);

export const editComment = (comment) => dispatch => (
    APIUtil.editComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);