import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/user_plans.scss'


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
            <div className='plan' id={plan._id}>
                <NavLink to={`/${plan._id}`}>
                    <h5 className>{plan.title}</h5>
                </NavLink>
                <div>{plan.description}</div>
            </div>
            )
        )
        
        return (
            <div className='plans-cont'>
                <h2 className='plans-title'>My plans</h2>
                {mapped}
            </div>
        )
    }
};

export default UserPlans;