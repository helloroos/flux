import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchSuggComments } from "../../actions/comment_actions";
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
    fetchSuggComments: suggId => dispatch(fetchSuggComments(suggId))
});

export default withRouter(connect(mapSTP, mapDTp)(SuggComments));