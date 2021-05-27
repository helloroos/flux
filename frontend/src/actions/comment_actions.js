import * as APIUtil from '../util/suggestions_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});