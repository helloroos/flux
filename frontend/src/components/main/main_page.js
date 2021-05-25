import React from 'react';

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

        </div>
        );
    }
}

export default MainPage;