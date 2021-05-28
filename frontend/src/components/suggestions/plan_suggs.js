import React from 'react';
import '../css/plan_sugg.scss'
import SuggestionContainer from './suggestion_container';
import Suggestion from './suggestion_item';
import UpvoteContainer from './upvote_container'



class PlanSuggestions extends React.Component {

    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        
        
        let mapped = this.props.suggs.map((sugg, i) => {
            
            return (
            <div key={`sugg-item-${i}`}>
                <Suggestion key={`sugg-${i}`}
                    sugg={sugg} />
                <div><UpvoteContainer sugg={sugg._id}/></div>
            </div>
        )})
        
        return mapped
    }
};

export default PlanSuggestions;