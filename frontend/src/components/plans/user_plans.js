import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/user_plans.scss';
import {format, toDate, toUTC} from 'date-fns';


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
            <NavLink to={`/${plan._id}`} className='plan-title-links'>
                <div className='each-plan-cont' id={plan._id}>
                        <h3 className='plan-title' >{plan.title}</h3>
                    <div className='plan-info'>
                        <h6>{plan.description}</h6>
                        
                        {/* <h5>{plan.startDate.toString().slice(0,10)} - {plan.startDate.toString().slice(0,10)}</h5> */}
                        <h5>{format(new Date(plan.startDate.toString().slice(0,10)), "MMM d Y")} - {format(new Date(plan.endDate.toString().slice(0,10)), "MMM d Y")}</h5>
                        {/* <h5>{plan.startDate} - {plan.startDate}</h5> */}
                    </div>
                </div>
            </NavLink>
            )
        )
        
        return (
            <div className='body-3'>
                <h2 className='plans-title'>Future plans...</h2>
                <div className='main-plan-cont'>
                    <div className='plans-cont'>
                        {mapped}
                    </div>
                </div>
            </div>
        )
    }
};

export default UserPlans;