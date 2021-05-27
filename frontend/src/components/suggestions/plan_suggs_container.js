import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createComment, fetchSuggComments } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchPlanSuggs } from '../../actions/sugg_actions';
import { downvote, downvoteRemove, upvote, upvoteRemove } from '../../actions/vote_actions';
import PlanSuggestions from './plan_suggs';

const mapSTP = (state, ownProps) => {
    debugger
    return ({
        planId: ownProps.match.params.planId,
        suggs: state.suggs.planSuggs,
        currentUser: state.session.user,
        comments: state.suggs.comments
    })
};

const mapDTP = dispatch => ({
    fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId)),
    upvote: suggId => dispatch(upvote(suggId)),
    upvoteRemove: suggId => dispatch(upvoteRemove(suggId)),
    downvote: suggId => dispatch(downvote(suggId)),
    downvoteRemove: suggId => dispatch(downvoteRemove(suggId)),
    fetchSuggComments: suggId => dispatch(fetchSuggComments(suggId)),
    createComment: (comment, suggId) => dispatch(createComment(comment, suggId)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapSTP, mapDTP)(PlanSuggestions));