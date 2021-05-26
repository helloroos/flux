import { RECEIVE_PLAN_SUGGS, RECEIVE_SUGG } from "../actions/sugg_actions";

const initialState = {
    planSuggs: undefined,
    new: undefined
};

const suggReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLAN_SUGGS:
            
            newState.planSuggs = action.suggs.data;
            return newState
        case RECEIVE_SUGG:
            
            newState.new = action.sugg.data;
            return newState
        default:
            return state;
    }
};

export default suggReducer;