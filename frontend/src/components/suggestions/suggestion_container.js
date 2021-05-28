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

// const mapDTP = dispatch => ({
//     createComment: (comment, suggId) => dispatch(createComment(comment, suggId)),
//     openModal: modal => dispatch(openModal(modal))
// })

export default withRouter(connect(mapSTP)(Suggestion));