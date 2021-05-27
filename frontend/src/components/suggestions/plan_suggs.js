import React from 'react';
import '../css/plan_sugg.scss'
import Upvote from './upvote';
import Downvote from './downvote';
import SuggComments from './sugg_comments';

class PlanSuggestions extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            commentsVisible: false
        }

        this.toggleComments = this.toggleComments.bind(this)
    }

    toggleComments(e) {
        e.preventDefault();
        this.setState({ commentsVisible: !this.state.commentsVisible })
    } 
    
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
                <p className='sugg-author'>{sugg.user}</p>
                <Upvote sugg={sugg}
                    upvote={this.props.upvote}
                    upvoteRemove={this.props.upvoteRemove}
                    />
                <Downvote sugg={sugg}    
                    downvote={this.props.downvote}
                    downvoteRemove={this.props.downvoteRemove}
                    />
                <button className='buttons' onClick={this.toggleComments}>
                    Comments
                </button>
                {this.state.commentsVisible ? (
                    <SuggComments suggId={sugg.id}/>
                ) : null }
            </div>
        ))

        return mapped
    }
};

export default PlanSuggestions;