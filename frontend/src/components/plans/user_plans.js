import React from 'react';
import PlanBox from './plan_box';

class UserPlans extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserPlans(this.props.userId)
    }

    render() {

        if (this.props.plans.length === 0) {
            return (
                <div>
                    Plans are coming
                </div>
            )
        } else {
            return (
                <div>
                    <h1>My plans</h1>
                    {this.props.plans.map(plan => (
                        <PlanBox plan={plan} key={plan._id}/>
                        )
                    )}
                </div>
            )

        }
    }
};

export default UserPlans;