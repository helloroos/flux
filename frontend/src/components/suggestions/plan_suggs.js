import React from 'react';
import '../css/plan_sugg.scss'
import Suggestion from './suggestion_item';


class PlanSuggestions extends React.Component {
    // constructor(props) {
    //     super(props)

        // this.state = {
        //     commentsVisible: false
        // }

        // this.toggleComments = this.toggleComments.bind(this)
    // }

    // toggleComments(e) {
    //     e.preventDefault();
    //     this.setState({ commentsVisible: !this.state.commentsVisible })
    // } 
    
    componentDidMount() {
        this.props.fetchPlanSuggs(this.props.planId)
    }
    
    render() {
        if (!this.props.suggs) return null;
        debugger
        const mapped = this.props.suggs.map(sugg => (
            <Suggestion sugg={sugg} 
                upvote={this.props.upvote}
                upvoteRemove={this.props.upvoteRemove}
                downvote={this.props.downvote}
                downvoteRemove={this.props.downvoteRemove}
                createComment={this.props.createComment}
                currentUser={this.props.currentUser}
                openModal={this.props.openModal}
                fetchSugg={this.props.fetchSugg}
            />
        ))

        return mapped 
    }
};

export default PlanSuggestions;