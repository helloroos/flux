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
                <h2>{sugg.title}</h2>
                <p>{sugg.description}</p>
                <h4>{sugg.budget}</h4>
                <div>{sugg.user}</div>
            </div>
        ))

        return mapped
    }
};

export default PlanSuggestions;