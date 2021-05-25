import React from 'react';
import PlanBox from './plan_box';

class UserPlans extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        debugger
        this.props.fetchUserPlans(this.props.userId)
    }

    render() {
        debugger
        if (!this.props.plans) return null;

        const mapped = this.props.plans.map(plan => (
                <PlanBox plan={plan} key={plan._id}/>
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