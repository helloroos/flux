import React from 'react';
import '../css/plan_sugg.scss'
import Suggestion from './suggestion_item';



class PlanSuggestions extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchPlanSuggs(this.props.planId)
    // }
    
    render() {
        if (this.props.suggs) return null;
        
        const mapped = this.props.suggs.map((sugg, i) => (
            <div key={`sugg-item-${i}`}>
                <Suggestion key={`sugg-${i}`} sugg={sugg} 
                    upvote={this.props.upvote}
                    upvoteRemove={this.props.upvoteRemove}
                    downvote={this.props.downvote}
                    downvoteRemove={this.props.downvoteRemove}
                    createComment={this.props.createComment}
                    currentUser={this.props.currentUser}
                    openModal={this.props.openModal}
                    fetchPlan={this.props.fetchPlan}
                />
            </div>
        ))

        return mapped
    }
};

export default PlanSuggestions;