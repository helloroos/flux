import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import { fetchPlan, joinParty, sendInvite } from "../../../actions/plan_actions";
import { createComment } from '../../../actions/comment_actions';
import { createSugg, fetchPlanSuggs, fetchSugg } from '../../../actions/sugg_actions';
import { downvote, downvoteRemove, upvote, upvoteRemove } from '../../../actions/vote_actions';
import PlanItem from "./plan_item";


const mapSTP = (state) => {
    let all = state.suggs.all;
    let newSug = state.suggs.new;
    let suggs = all.concat(newSug)
    
    return ({
        plan: state.plans.new,
        currentUser: state.session.user,
        planSuggs: suggs
    })
};

const mapDTP = dispatch => {
    
    return ({
        fetchPlan: id => dispatch(fetchPlan(id)),
        sendInvite: (email, id) => dispatch(sendInvite(email, id)),
        joinParty: (planId, userId) => dispatch(joinParty(planId, userId)),
        openModal: modal => dispatch(openModal(modal)),
        fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId)),
        upvote: suggId => dispatch(upvote(suggId)),
        upvoteRemove: suggId => dispatch(upvoteRemove(suggId)),
        downvote: suggId => dispatch(downvote(suggId)),
        downvoteRemove: suggId => dispatch(downvoteRemove(suggId)),
        fetchSugg: suggId => dispatch(fetchSugg(suggId)),
        createSugg: (sugg, planId) => dispatch(createSugg(sugg, planId)),
        createComment: (comment, suggId) => dispatch(createComment(comment, suggId)),
    })
};


export default connect(mapSTP, mapDTP)(PlanItem);