import React from 'react';

class IfLoggedIn extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            title: props.plan.title,
            description: props.plan.description
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let plan = {
            title: this.state.title,
            description: this.state.description
        }

        this.props.createPlan(plan)
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Create a plan
            </button>
        )
    }
};

export default IfLoggedIn;