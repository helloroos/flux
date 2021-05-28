import React from 'react';
import { withRouter } from 'react-router';

class IfLoggedIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.plan.title,
            description: props.plan.description,
            created: false,
            planId: ''
        }
         
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let plan = {
            title: this.props.plan.title,
            description: this.props.plan.description
        }
        this.props.createPlan(plan)
        this.setState({
            created: true
        })
    }

    refreshPage() {
        if (!this.props.newPlan) return null;
        this.props.history.push(`/${this.props.newPlan._id}`)
    }

    render() {

        return (
            <div>
                
                {this.state.created ? this.refreshPage() : null }
            </div>
            
        )
    }
};

export default withRouter(IfLoggedIn);