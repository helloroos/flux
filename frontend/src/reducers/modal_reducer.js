import { CLOSE_MODAL, SHOW_MODAL } from "../actions/modal_actions";


const modalReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SHOW_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalReducer;