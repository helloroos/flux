import { connect } from "react-redux";
import { hideModal, openModal } from "../../actions/modal_actions";
import SignupForm from "./signup_form";

const { signup } = require("../../actions/session_actions");


const mapSTP = state => ({
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session),
});

const mapDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    hideModal: () => dispatch(hideModal()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapSTP, mapDTP)(SignupForm);