import { connect } from "react-redux";
import Suggestion from "./suggestion_item";
import { withRouter } from 'react-router';
import { deleteSugg, fetchPlanSuggs } from "../../actions/sugg_actions";
import { fetchSuggComments } from "../../actions/comment_actions";


const mapSTP = (state, ownProps) => {
    return ({
        suggs: state.main.suggs,
        planId: ownProps.match.params.planId,
        currentUser: state.session.user,
    })
};

const mapDTP = (dispatch) => ({
    deleteSugg: id => dispatch(deleteSugg(id)),
    fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId)),
    fetchSuggComments: suggId => dispatch(fetchSuggComments(suggId)),
})

export default withRouter(connect(mapSTP, mapDTP)(Suggestion));