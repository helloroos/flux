import axios from 'axios';

export const createPlan = (planData) => {
    return axios.post('/api/plans', planData);
};