import { connect } from "react-redux";
import { fetchUserPlans } from "../../actions/plan_actions";
import UserPlans from "./user_plans";


const mapSTP = state => {
    return ({
        plans: state.main.plans.userPlans
    })
};

const mapDTP = dispatch => ({
    fetchUserPlans: id => dispatch(fetchUserPlans(id))
});

export default connect(mapSTP, mapDTP)(UserPlans);