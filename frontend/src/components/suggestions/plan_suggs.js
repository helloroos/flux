import React from 'react';

class PlanSuggestions extends React.Component {
    
    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        if (!this.props.planSuggs) return null;
        debugger
        const mapped = this.props.planSuggs.map(sugg => (
            <div>
                <div>{sugg.title}</div>
                <div>{sugg.description}</div>
                <div>{sugg.budget}</div>
                <div>{sugg.user}</div>
            </div>
        ))

        return mapped
    }
};

export default PlanSuggestions;