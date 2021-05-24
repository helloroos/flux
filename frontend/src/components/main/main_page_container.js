import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import MainPage from "./main_page";

const { openModal } = require("../../actions/modal_actions");


const mapDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
});

export default connect(null, mapDTP)(MainPage);