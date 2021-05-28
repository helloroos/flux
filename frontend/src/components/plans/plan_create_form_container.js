import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { createPlan } from "../../actions/plan_actions";
import PlanCreateForm from "./plan_create_form";
// import { withRouter } from 'react-router';

const mapSTP = state => {
    
    return ({
        currentUser: state.session.user,
        plan: state.main.plans.new
    })
};

const mapDTP = dispatch => ({
    createPlan: data => dispatch(createPlan(data)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapSTP, mapDTP)(PlanCreateForm);