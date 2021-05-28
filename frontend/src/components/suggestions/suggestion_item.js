import React from 'react';
import Upvote from './upvote';
import Downvote from './downvote';
import SuggComments from './sugg_comments';
import CreateComment from './comment_create';

class Suggestion extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            commentsVisible: false
        }

        this.toggleComments = this.toggleComments.bind(this)
    }

    // componentDidUpdate() {
    //     this.props.fetchPlanSuggs(this.props.planId)
    // }

    toggleComments(e) {
        e.preventDefault();
        this.setState({ commentsVisible: !this.state.commentsVisible })
    }

    render() {
        if (!this.props.sugg) return null;
        // const sugg = this.props
        debugger
        return (
            <div>
                <div className='sugg-item-cont'>
                    <h2>{this.props.sugg._id}</h2>
                    <p>{this.props.sugg.description}</p>
                    <h4>{this.props.sugg.budget}</h4>
                    <div>{this.props.sugg.user}</div>
                </div>
                <Upvote sugg={this.props.sugg}
                    currentUser={this.props.currentUser}
                    upvote={this.props.upvote}
                    upvoteRemove={this.props.upvoteRemove}
                    downvote={this.props.downvote}
                    downvoteRemove={this.props.downvoteRemove}
                    />
                <CreateComment suggId={this.props.sugg._id}
                        createComment={this.props.createComment}
                        currentUser={this.props.currentUser}
                        openModal={this.props.openModal}
                        fetchSugg={this.props.fetchSugg}/>
                <div onClick={this.toggleComments}>
                    Open comments
                </div>
                {this.state.commentsVisible ? (
                    <SuggComments sugg={this.props.sugg}
                        comments={this.props.sugg.comments}
                        fetchSugg={this.props.fetchSugg}/>
                ) : null }
            </div>
        )
    }
};

export default Suggestion;