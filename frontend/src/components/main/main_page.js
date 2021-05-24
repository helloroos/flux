import React from 'react';
import Footer from './footer';

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        let field = e.target.innerHTML;
        this.props.openModal(field)
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
            <Footer />
        </div>
        );
    }
}

export default MainPage;