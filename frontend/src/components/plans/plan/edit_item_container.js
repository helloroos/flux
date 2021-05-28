import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editPlan, fetchPlan } from "../../../actions/plan_actions";
import EditPlan from './edit_item';

const mapSTP = (state, ownProps) => {
    
    return ({
        planId: ownProps.match.params.planId,
        plan: state.main.plans,
        currentUser: state.session.user
    })
};

const mapDTP = dispatch => ({
    editPlan: (plan, planId) => dispatch(editPlan(plan, planId)),
    fetchPlan: id => dispatch(fetchPlan(id))
});

export default withRouter(connect(mapSTP, mapDTP)(EditPlan));