import { connect } from "react-redux";
import LoginForm from "./login_form";

const { login } = require("../../actions/session_actions");


const mapDTP = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(null, mapDTP)(LoginForm);