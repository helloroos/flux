import axios from 'axios';

export const createPlan = (planData) => {  
    return axios.post('/api/plans', planData);
};

export const showPlan = (id) => {
    return axios.get(`/api/plans/${id}`)
};

export const showUserPlans = id => {
    return axios.get(`/api/plans/user/${id}`)
};

export const createInvite = (emailData, id) => {
    return axios.post(`/api/email/${id}/send`, { email: emailData })
};

export const joinPlan = (planId, userId) => {
    debugger
    return axios.patch(`/api/plans/${planId}/addmember`, userId)
};

export const editPlan = (plan, planId) => {
    return axios.patch(`/api/plans/${planId}`, plan)
};