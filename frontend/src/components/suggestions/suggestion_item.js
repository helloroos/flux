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

    componentDidMount() {
        this.props.fetchSugg(this.props.sugg._id)
    }

    toggleComments(e) {
        e.preventDefault();
        this.setState({ commentsVisible: !this.state.commentsVisible })
    }

    render() {

        const { sugg } = this.props
        debugger
        return (
            <div>
                <div className='sugg-item-cont'>
                    <h2>{sugg.title}</h2>
                    <p>{sugg.description}</p>
                    <h4>{sugg.budget}</h4>
                    <div>{sugg.user}</div>
                </div>
                <Upvote sugg={sugg}
                    currentUser={this.props.currentUser}
                    upvote={this.props.upvote}
                    upvoteRemove={this.props.upvoteRemove}
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
                        fetchSugg={this.props.fetchSugg}/>
                {this.state.commentsVisible ? (
                    <SuggComments sugg={sugg}
                        comments={sugg.comments}
                        fetchSugg={this.props.fetchSugg}/>
                ) : null }
            </div>
        )
    }
};

export default Suggestion;