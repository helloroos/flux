import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createComment } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
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
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapSTP, mapDTP)(CreateComment));