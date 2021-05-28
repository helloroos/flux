import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { downvote, downvoteRemove, upvote, upvoteRemove } from "../../actions/vote_actions";
import Upvote from './upvote';
import React from 'react';

const mapSTP = (state, ownProps) => {
    debugger
    return ({
        suggs: state.main.suggs,
        planId: ownProps.match.params.planId,
        currentUser: state.session.user,
    })
};

const mapDTP = dispatch => ({
    upvote: (suggId) => dispatch(upvote(suggId)),
    upvoteRemove: (suggId) => dispatch(upvoteRemove(suggId)),
    downvote: (suggId) => dispatch(downvote(suggId)),
    downvoteRemove: (suggId) => dispatch(downvoteRemove(suggId))
});

// export default connect(mapSTP, mapDTP)(Upvote);
export default withRouter(connect(mapSTP, mapDTP)(Upvote));