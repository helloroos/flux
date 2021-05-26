import React from 'react';
import { NavLink } from 'react-router-dom';

class UserPlans extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.plans
        
    }

    componentDidMount() {
        this.props.fetchUserPlans(this.props.match.params.userId)
    }

    render() {
        if (!this.props.plans) return null;
        
        const mapped = this.props.plans.map(plan => (
                <div>
                    <NavLink to={`/${plan._id}`}>{plan.title}</NavLink>
                    <div>{plan.description}</div>
                </div>
            )
        )
        
        return (
            <div>
                <h1>My plans</h1>
                {mapped}
            </div>
        )
    }
};

export default UserPlans;