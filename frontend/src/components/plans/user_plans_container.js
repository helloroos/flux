import { connect } from "react-redux";
import { fetchUserPlans } from "../../actions/plan_actions";
import UserPlans from "./user_plans";


const mapSTP = state => {
    // if (!state.session.plans.user) return null
    debugger
    return ({
        plans: state.plans.userPlans
    })
};

const mapDTP = dispatch => ({
    fetchUserPlans: id => dispatch(fetchUserPlans(id))
});

export default connect(mapSTP, mapDTP)(UserPlans);