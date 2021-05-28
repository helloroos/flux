import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { downvote, downvoteRemove, upvote, upvoteRemove } from "../../actions/vote_actions";
import Upvote from './upvote';

const mapSTP = (state, ownProps) => {
    
    return ({
        suggs: state.main.suggs,
        planId: ownProps.match.params.planId,
        currentUser: state.session.user,
        votes: state.main.votes
    })
};

const mapDTP = dispatch => ({
    upvote: (suggId) => dispatch(upvote(suggId)),
    upvoteRemove: (suggId) => dispatch(upvoteRemove(suggId)),
    downvote: (suggId) => dispatch(downvote(suggId)),
    downvoteRemove: (suggId) => dispatch(downvoteRemove(suggId)),
});

export default withRouter(connect(mapSTP, mapDTP)(Upvote));