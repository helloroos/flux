import axios from 'axios';

export const createPlan = (planData) => {
    debugger
    return axios.post('/api/plans', planData);
};

export const showPlan = (id) => {
    return axios.get(`/api/plans/${id}`)
};

export const showUserPlans = id => {
    debugger
    return axios.get(`/api/plans/user/${id}`)
};