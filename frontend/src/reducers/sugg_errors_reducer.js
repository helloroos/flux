import { RECEIVE_SUGG, RECEIVE_SUGG_ERRORS } from "../actions/sugg_actions";


const _nullErrors = [];

const suggErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SUGG_ERRORS:
            return action.errors;
        case RECEIVE_SUGG:
            return [];
        default:
            return state;
    }
}

export default suggErrorsReducer;