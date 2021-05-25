import * as PlanApiUtil from '../util/plans_api_util';

export const RECEIVE_PLAN = 'RECEIVE_PLAN';
export const RECEIVE_USER_PLANS = 'RECEIVE_USER_PLANS';

export const receivePlan = plan => ({
    type: RECEIVE_PLAN,
    plan
});

export const receiveUserPlans = plans => ({
    type: RECEIVE_USER_PLANS,
    plans
});

export const createPlan = data => dispatch => (
    PlanApiUtil.createPlan(data)
        .then(plan => dispatch(receivePlan(plan)))
);

export const fetchUserPlans = id => dispatch => (
    PlanApiUtil.showUserPlans(id)
        .then(plans => dispatch(receiveUserPlans(plans)))
);