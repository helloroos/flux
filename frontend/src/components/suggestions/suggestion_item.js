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
            <div className='each-sugg-cont'>
                <div className='sugg-item-cont'>
                    <div className='sugg-left'>
                        <p className='sugg-title'>{sugg.title}</p>
                        <p className='sugg-desc'>{sugg.description}</p>
                        <p className='sugg-budget'>{sugg.budget}</p>
                        <p className='sugg-author'>{sugg.user}</p>
                        <div onClick={this.toggleComments}>
                            Open comments
                        </div>
                    <div className='create-comment-cont'>
                        {this.state.commentsVisible ? (
                            <>
                        <CreateComment suggId={sugg._id}
                                createComment={this.props.createComment}
                                currentUser={this.props.currentUser}
                                openModal={this.props.openModal}
                                fetchSugg={this.props.fetchSugg}/>
                            <SuggComments sugg={sugg}
                            comments={sugg.comments}
                            fetchSugg={this.props.fetchSugg}/>
                            </>
                            ) : null }
                    </div>
                    </div>

                <div className='sugg-right'>
                    <Upvote sugg={sugg}
                        currentUser={this.props.currentUser}
                        upvote={this.props.upvote}
                        upvoteRemove={this.props.upvoteRemove}
                        downvote={this.props.downvote}
                        downvoteRemove={this.props.downvoteRemove}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default Suggestion;