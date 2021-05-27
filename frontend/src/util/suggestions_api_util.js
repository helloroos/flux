import axios from 'axios';

export const createSugg = (suggData, planId) => {
    return axios.post(`/api/suggestions/plan/${planId}/create`, suggData)
};

export const showPlanSugg = (planId) => {
    return axios.get(`/api/suggestions/plan/${planId}`)
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