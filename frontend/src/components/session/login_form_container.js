import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";

const { login } = require("../../actions/session_actions");


const mapDTP = dispatch => ({
    login: user => dispatch(login(user)),
    hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDTP)(LoginForm);