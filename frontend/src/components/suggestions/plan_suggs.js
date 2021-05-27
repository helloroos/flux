import React from 'react';
import '../css/plan_sugg.scss'
import Upvote from './upvote';
import Downvote from './downvote';
import SuggComments from './sugg_comments';
import CreateComment from './comment_create';

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
        if (!this.props.suggs) return null;

        debugger
        const mapped = this.props.suggs.map(sugg => (
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
                <CreateComment suggId={sugg._id}
                        createComment={this.props.createComment}
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal}
                        fetchSuggComments={this.props.fetchSuggComments}/>
                {this.state.commentsVisible ? (
                    <SuggComments sugg={sugg}
                        fetchSuggComments={this.props.fetchSuggComments}/>
                ) : null }
            </div>
        ))

        return mapped 
    }
};

export default PlanSuggestions;