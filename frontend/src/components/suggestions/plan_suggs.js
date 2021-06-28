import React from 'react';
import '../css/plan_sugg.scss'
import SuggestionContainer from './suggestion_container';

class PlanSuggestions extends React.Component {

    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        const { suggs } = this.props;
        
        let reversed = [...suggs].reverse();
        let mapped = reversed.map((sugg, i) => {
            let visible = false;

            if (this.props.currentUser._id === sugg.user[0]._id) {
                visible = true
            }
            
            return (
            <div key={`sugg-item-${i}`} className='sugg-section' id={`sugg-${i}`}>
                <SuggestionContainer key={`sugg-${i}`}
                    sugg={sugg} visible={visible}/>
            </div>
        )})
        
        return mapped
    }
};

export default PlanSuggestions;