import { connect } from 'react-redux';
import { createSugg } from "../../actions/sugg_actions";
import { openModal } from '../../actions/modal_actions';
import CreateSugg from "./create_sugg";
import { withRouter } from 'react-router';

const mapSTP = (state, ownProps) => {
    
    return ({
        currentUser: state.session.user,
        planId: ownProps.match.params.planId
    })
};

const mapDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    createSugg: (sugg, planId) => dispatch(createSugg(sugg, planId))
});

export default withRouter(connect(mapSTP, mapDTP)(CreateSugg));