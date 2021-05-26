import { connect } from "react-redux";
import { editPlan, fetchPlan, joinParty, sendInvite } from "../../../actions/plan_actions";
import PlanItem from "./plan_item";


const mapSTP = (state) => {
    
    return ({
        plan: state.plans.new,
        currentUser: state.session.user.id
    })
};

const mapDTP = dispatch => {
    debugger
    return ({
        fetchPlan: id => dispatch(fetchPlan(id)),
        sendInvite: (email, id) => dispatch(sendInvite(email, id)),
        editPlan: (plan, planId) => dispatch(editPlan(plan, planId)),
        joinParty: (planId, userId) => dispatch(joinParty(planId, userId))
    })
};

export default connect(mapSTP, mapDTP)(PlanItem);