import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPlanSuggs } from '../../actions/sugg_actions';
import { downvote, downvoteRemove, upvote, upvoteRemove } from '../../actions/vote_actions';
import PlanSuggestions from './plan_suggs';

const mapSTP = (state, ownProps) => {
    
    return ({
        planId: ownProps.match.params.planId,
        planSuggs: state.suggs.planSuggs
    })
};

const mapDTP = dispatch => ({
    fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId)),
    upvote: suggId => dispatch(upvote(suggId)),
    upvoteRemove: suggId => dispatch(upvoteRemove(suggId)),
    downvote: suggId => dispatch(downvote(suggId)),
    downvoteRemove: suggId => dispatch(downvoteRemove(suggId))
});

export default withRouter(connect(mapSTP, mapDTP)(PlanSuggestions));