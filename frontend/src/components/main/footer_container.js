import { connect } from "react-redux";
import Footer from './footer';

const mapSTP = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        route: ownProps.location
    })
};

export default connect(mapSTP)(Footer);