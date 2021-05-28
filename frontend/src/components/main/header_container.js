import { connect } from "react-redux";
import { openModal, hideModal } from "../../actions/modal_actions";
import Header from './header';
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapSTP = (state, ownProps) => {
  return ({
    currentUser: state.session.user, 
    route: ownProps.location,
    history: ownProps.history,
  })
};

const mapDTP = dispatch => {
  return ({
    openModal: (modal) => dispatch(openModal(modal)),
    hideModal: () => dispatch(hideModal()),
    logout: () => dispatch(logout())
  })
};

export default withRouter(connect(mapSTP, mapDTP)(Header));