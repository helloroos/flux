import React from 'react';
import Footer from './footer';

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let field = e.target.innerHTML;
        this.props.openModal(field)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
        <div>
            <h1>Flux project</h1>
            <button onClick={this.handleClick}>
                Sign Up
            </button>
            <button onClick={this.handleClick}>
                Sign In
            </button>
            <button onClick={this.handleLogout}>
                Log Out
            </button>
            <Footer />
        </div>
        );
    }
}

export default MainPage;