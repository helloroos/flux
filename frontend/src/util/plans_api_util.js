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
    debugger
    return axios.post(`/api/email/${id}/send`, emailData)
}