import axios from 'axios';

export const createSugg = (suggData, planId) => {
    
    return axios.post(`/api/suggestions/plan/${planId}/create`, suggData)
};

export const showPlanSugg = (planId) => {
    
    return axios.get(`/api/suggestions/plan/${planId}`)
};