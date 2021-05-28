import { connect } from "react-redux";
import Suggestion from "./suggestion_item";
import { withRouter } from 'react-router';


const mapSTP = (state, ownProps) => {
    
    return ({
        suggs: state.main.suggs,
        planId: ownProps.match.params.planId,
        currentUser: state.session.user,
    })
};

export default withRouter(connect(mapSTP)(Suggestion));