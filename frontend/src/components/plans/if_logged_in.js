import React from 'react';

class IfLoggedIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.plan.title,
            description: props.plan.description
        }
         
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let plan = {
            title: this.props.plan.title,
            description: this.props.plan.description
        }
        
        this.props.createPlan(plan);
        this.props.clearInput();
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