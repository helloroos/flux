import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import Modal from "./modal";

const mapSTP = (state) => {
    return ({
        modal: state.ui.modal,
    })
};

const mapDTP = dispatch => {
    return ({
        hideModal: () => dispatch(hideModal())
    })
};

export default connect(mapSTP, mapDTP)(Modal);