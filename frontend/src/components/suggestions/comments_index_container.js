import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteComment, fetchSuggComments } from "../../actions/comment_actions";
import { fetchPlanSuggs } from "../../actions/sugg_actions";
import SuggComments from "./sugg_comments";


const mapSTP = (state, ownProps) => {
    

    return ({
        suggs: state.main.suggs,
        planId: ownProps.match.params.planId,
        currentUser: state.session.user,
        comments: state.main.comments.comments
    })
};

const mapDTp = dispatch => ({
    fetchSuggComments: suggId => dispatch(fetchSuggComments(suggId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId))
});

export default withRouter(connect(mapSTP, mapDTp)(SuggComments));