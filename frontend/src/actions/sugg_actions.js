import * as SuggApiUtil from '../util/suggestions_api_util';

export const RECEIVE_SUGG = 'RECEIVE_SUGG';
export const RECEIVE_PLAN_SUGGS = 'RECEIVE_PLAN_SUGGS';
export const RECEIVE_SUGG_ERRORS = 'RECEIVE_SUGG_ERRORS';
export const DELETE_SUGG = 'DELETE_SUGG';

export const receiveSugg = sugg => ({
    type: RECEIVE_SUGG,
    sugg
});

export const receivePlanSuggs = suggs => ({
    type: RECEIVE_PLAN_SUGGS,
    suggs
});

export const receiveSuggErrors = errors => {
    return ({
        type: RECEIVE_SUGG_ERRORS,
        errors
    })
};

// export default removeSugg = 

export const fetchSugg = (suggId) => dispatch => (
    SuggApiUtil.showSugg(suggId)
        .then(sugg => dispatch(receiveSugg(sugg)))
        // .catch(err => dispatch(receiveSuggErrors(err)))
);

export const fetchPlanSuggs = (planId) => dispatch => (
    SuggApiUtil.showPlanSugg(planId)
        .then(suggs => dispatch(receivePlanSuggs(suggs)))
        // .catch(err => dispatch(receiveSuggErrors(err)))
);

export const createSugg = (sugg, planId) => dispatch => (
    SuggApiUtil.createSugg(sugg, planId)
        .then(sugg => dispatch(receiveSugg(sugg)))
        // .catch(err => dispatch(receiveSuggErrors(err)))
);