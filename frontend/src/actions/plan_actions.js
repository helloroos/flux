import * as PlanApiUtil from '../util/plans_api_util';

export const RECEIVE_PLAN = 'RECEIVE_PLAN';

export const receivePlan = plan => ({
    type: RECEIVE_PLAN,
    plan
});

export const createPlan = data => dispatch => (
    PlanApiUtil.createPlan(data)
        .then(plan => dispatch(receivePlan(plan)))
);