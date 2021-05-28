import { connect } from "react-redux";
import { openModal, hideModal } from "../../actions/modal_actions";
import Header from './header';
import { logout } from "../../actions/session_actions";


// const { openModal, hideModal } = require('../../actions/modal_actions')

const mapSTP = (state, ownProps) => {
  return ({
    currentUser: state.session.user, 
    route: ownProps.location
  })
};

const mapDTP = dispatch => {
  return ({
    openModal: (modal) => dispatch(openModal(modal)),
    hideModal: () => dispatch(hideModal()),
    logout: () => dispatch(logout())
  })
};

export default connect(mapSTP, mapDTP)(Header);