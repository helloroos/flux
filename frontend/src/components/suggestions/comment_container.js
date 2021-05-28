import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createComment, fetchSuggComments } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchPlanSuggs } from "../../actions/sugg_actions";
import CreateComment from "./comment_create";

const mapSTP = (state, ownProps) => {
    return ({
        suggs: state.main.suggs,
        planId: ownProps.match.params.planId,
        currentUser: state.session.user
    })
}

const mapDTP = dispatch => ({
    createComment: (comment, suggId) => dispatch(createComment(comment, suggId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchSuggComments: suggId => dispatch(fetchSuggComments(suggId)),
    fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId))
});

export default withRouter(connect(mapSTP, mapDTP)(CreateComment));