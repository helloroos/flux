import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import { fetchPlan, joinParty, sendInvite } from "../../../actions/plan_actions";
import { createComment, fetchSuggComments } from '../../../actions/comment_actions';
import { createSugg, fetchPlanSuggs, fetchSugg } from '../../../actions/sugg_actions';
import { downvote, downvoteRemove, upvote, upvoteRemove } from '../../../actions/vote_actions';
import PlanItem from "./plan_item";


const mapSTP = (state) => {
    
    return ({
        plan: state.main.plans.plan,
        currentUser: state.session.user,
        comments: state.main.comments
    })
};

const mapDTP = dispatch => {
    
    return ({
        fetchPlan: id => dispatch(fetchPlan(id)),
        sendInvite: (email, id) => dispatch(sendInvite(email, id)),
        joinParty: (planId, userId) => dispatch(joinParty(planId, userId)),
        openModal: modal => dispatch(openModal(modal)),
        fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId)),
        fetchSugg: suggId => dispatch(fetchSugg(suggId)),
        createSugg: (sugg, planId) => dispatch(createSugg(sugg, planId)),
    })
};


export default connect(mapSTP, mapDTP)(PlanItem);