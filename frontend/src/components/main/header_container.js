import { connect } from "react-redux";
import { openModal, hideModal } from "../../actions/modal_actions";
import Header from './header';

const mapSTP = (state) => {
  return ({
    currentUser: state.session.user, 
  })
};

const mapDTP = dispatch => {
  return ({
    openModal: (model) => dispatch(hideModal(model)),
    hideModal: (model) => dispatch(hideModal(model))
  })
};

export default connect(mapSTP, mapDTP)(Header);