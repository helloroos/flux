import React from 'react';
import '../css/plan_sugg.scss'
import Suggestion from './suggestion_item';



class PlanSuggestions extends React.Component {

    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        let { suggs } = this.props;
        let reversed = suggs.reverse();

        let mapped = reversed.map((sugg, i) => {
            
            return (
            <div key={`sugg-item-${i}`}>
                <Suggestion key={`sugg-${i}`}
                    sugg={sugg} />
            </div>
        )})
        
        return mapped
    }
};

export default PlanSuggestions;