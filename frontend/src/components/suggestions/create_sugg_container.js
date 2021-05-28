import { connect } from 'react-redux';
import { createSugg, fetchPlanSuggs } from "../../actions/sugg_actions";
import { openModal } from '../../actions/modal_actions';
import CreateSugg from "./create_sugg";
import { withRouter } from 'react-router';
import { createComment } from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => {
    
    return ({
        currentUser: state.session.user,
        planId: ownProps.match.params.planId,
        suggs: state.main.suggs
    })
};

const mapDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    createComment: (sugg, planId) => dispatch(createComment(sugg, planId)),
    createSugg: (suggData, planId) => dispatch(createSugg(suggData, planId))
});

export default withRouter(connect(mapSTP, mapDTP)(CreateSugg));