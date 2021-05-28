import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Footer from './footer';

const mapSTP = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        path: ownProps.location.pathname
    })
};

export default withRouter(connect(mapSTP)(Footer));