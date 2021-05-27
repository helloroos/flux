import React from 'react';
import '../css/plan_sugg.scss'

class PlanSuggestions extends React.Component {
    
    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        if (!this.props.planSuggs) return null;
        debugger
        const mapped = this.props.planSuggs.map(sugg => (
            <div className='sugg-item-cont'>
                <p className='sugg-title'>{sugg.title}</p>
                <p className='sugg-desc'>{sugg.description}</p>
                <p className='sugg-budget'>{sugg.budget}</p>
                <p className='sugg-user'>{sugg.user}</p>
            </div>
        ))

        return mapped
    }
};

export default PlanSuggestions;