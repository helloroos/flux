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
                <h2>{sugg.title}</h2>
                <p>{sugg.description}</p>
                <h4>{sugg.budget}</h4>
                <div>{sugg.user}</div>
                <Upvote sugg={sugg}
                    upvote={this.props.upvote}
                    upvoteRemove={this.props.upvoteRemove}
                    />
                <Downvote sugg={sugg}    
                    downvote={this.props.downvote}
                    downvoteRemove={this.props.downvoteRemove}
                    />
                <div onClick={this.toggleComments}>
                    Open comments
                </div>
                {this.state.commentsVisible ? (
                    <SuggComments suggId={sugg.id}/>
                ) : null }
            </div>
        ))

        return mapped
    }
};

export default PlanSuggestions;