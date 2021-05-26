import * as PlanApiUtil from '../util/plans_api_util';

export const RECEIVE_PLAN = 'RECEIVE_PLAN';
export const RECEIVE_USER_PLANS = 'RECEIVE_USER_PLANS';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';

export const receivePlan = plan => ({
    type: RECEIVE_PLAN,
    plan
});

export const receiveUserPlans = plans => ({
    type: RECEIVE_USER_PLANS,
    plans
});

export const receiveEmail = email => {
    
    return ({
        type: RECEIVE_EMAIL,
        email
    })
};

export const sendInvite = (email, id) => dispatch => {
    
    return PlanApiUtil.createInvite(email, id)
        .then(email => dispatch(receiveEmail(email)))
};

export const createPlan = data => dispatch => (
    PlanApiUtil.createPlan(data)
        .then(plan => dispatch(receivePlan(plan)))
);

export const fetchUserPlans = id => dispatch => (
    PlanApiUtil.showUserPlans(id)
        .then(plans => dispatch(receiveUserPlans(plans)))
);

export const fetchPlan = id => dispatch => {
    return PlanApiUtil.showPlan(id)
        .then(plan => dispatch(receivePlan(plan)))
};