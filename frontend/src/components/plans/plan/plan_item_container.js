import { connect } from "react-redux";
import { fetchPlan, sendInvite } from "../../../actions/plan_actions";
import PlanItem from "./plan_item";


const mapSTP = (state) => {
    
    return ({
        plan: state.plans.new
    })
};

const mapDTP = dispatch => ({
    fetchPlan: id => dispatch(fetchPlan(id)),
    sendInvite: (email, id) => dispatch(sendInvite(email, id))
})

export default connect(mapSTP, mapDTP)(PlanItem);