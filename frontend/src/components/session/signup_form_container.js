import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import SignupForm from "./signup_form";

const { signup } = require("../../actions/session_actions");


const mapSTP = state => ({
    signedIn: state.session.isSignedIn
});

const mapDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mapSTP, mapDTP)(SignupForm);