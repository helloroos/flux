import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import { fetchPlan, joinParty, sendInvite } from "../../../actions/plan_actions";
import { fetchPlanSuggs } from "../../../actions/sugg_actions";
import PlanItem from "./plan_item";


const mapSTP = (state) => {
    
    return ({
        plan: state.plans.new,
        currentUser: state.session.user,
        planSuggs: state.suggs.planSuggs
    })
};

const mapDTP = dispatch => {
    
    return ({
        fetchPlan: id => dispatch(fetchPlan(id)),
        sendInvite: (email, id) => dispatch(sendInvite(email, id)),
        joinParty: (planId, userId) => dispatch(joinParty(planId, userId)),
        openModal: modal => dispatch(openModal(modal)),
        fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId))
    })
};

export default connect(mapSTP, mapDTP)(PlanItem);