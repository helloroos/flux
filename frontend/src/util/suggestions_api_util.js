import axios from 'axios';

export const createSugg = (suggData, planId) => {
    
    return axios.post(`/api/suggestions/plan/${planId}/create`, suggData)
};

export const showSugg = (suggId) => {
    return axios.get(`/api/suggestions/${suggId}`)
};

export const showPlanSugg = (planId) => {
    return axios.get(`/api/suggestions/plan/${planId}`)
};

export const deletePlanSugg = (suggId) => {
    return axios.get(`/api/suggestions/${suggId}`)
};

export const showSuggComments = suggId => {
    return axios.get(`/api/comments/suggestion/${suggId}`)
};

export const createComment = (comment, suggId) => {
    
    return axios.post(`/api/comments/suggestion/${suggId}/create`, comment)
};

export const editComment = comment => {
    return axios.patch(`/api/comments/${comment.id}`, comment)
};

export const deleteComment = id => {
    return axios.delete(`/api/comments/${id}`)
};

export const upvote = (suggId) => {
    return axios.patch(`/api/suggestions/${suggId}/upvote`)
};

export const upvoteRemove = (suggId) => {
    return axios.patch(`/api/suggestions/${suggId}/removeupvote`)
};

export const downvote = (suggId) => {
    return axios.patch(`/api/suggestions/${suggId}/downvote`)
};

export const downvoteRemove = (suggId) => {
    return axios.patch(`/api/suggestions/${suggId}/removedownvote`)
};