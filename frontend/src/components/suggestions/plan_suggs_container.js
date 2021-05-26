import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPlanSuggs } from '../../actions/sugg_actions';
import PlanSuggestions from './plan_suggs';

const mapSTP = (state, ownProps) => {
    
    return ({
        planId: ownProps.match.params.planId,
        planSuggs: state.suggs.planSuggs
    })
};

const mapDTP = dispatch => ({
    fetchPlanSuggs: planId => dispatch(fetchPlanSuggs(planId))
});

export default withRouter(connect(mapSTP, mapDTP)(PlanSuggestions));