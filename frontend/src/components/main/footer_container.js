import { connect } from "react-redux";
import Footer from './footer';

const mapSTP = (state) => {
    return ({
        currentUser: state.session.user,
    })
};

export default connect(mapSTP)(Footer);