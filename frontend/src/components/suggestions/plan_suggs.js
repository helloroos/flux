import React from 'react';
import '../css/plan_sugg.scss'
import SuggestionContainer from './suggestion_container';
import Suggestion from './suggestion_item';



class PlanSuggestions extends React.Component {

    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        
        
        let mapped = this.props.suggs.map((sugg, i) => {
            
            return (
            <div key={`sugg-item-${i}`} className='sugg-section' id={`sugg-${i}`}>
                <Suggestion key={`sugg-${i}`}
                    sugg={sugg} />
                    {/* // createComment={this.props.createComment}
                    // currentUser={this.props.currentUser}
                    // openModal={this.props.openModal}
                    // fetchPlan={this.props.fetchPlan} */}
            </div>
        )})
        
        return mapped
    }
};

export default PlanSuggestions;