import { RECEIVE_PLAN, RECEIVE_PLAN_ERRORS } from "../actions/plan_actions";

const _nullErrors = [];

const planErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLAN_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_PLAN:
            return [];
        default:
            return state;
    }
}

export default planErrorsReducer;