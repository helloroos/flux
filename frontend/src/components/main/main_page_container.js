import { connect } from "react-redux";
import MainPage from "./main_page";

const { openModal } = require("../../actions/modal_actions");


const mapDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mapDTP)(MainPage);