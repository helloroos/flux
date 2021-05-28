import React from 'react';
import Upvote from './upvote';
import SuggComments from './sugg_comments';
import CreateComment from './comment_create';
import { withRouter } from 'react-router';

class Suggestion extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            commentsVisible: false
        }

        this.toggleComments = this.toggleComments.bind(this)
    }

    // componentDidUpdate() {
    //     debugger
    //     this.props.fetchSugg(this.props.sugg._id)
    // }

    toggleComments(e) {
        e.preventDefault();
        this.setState({ commentsVisible: !this.state.commentsVisible })
    }

    render() {
        if (!this.props.sugg) return null;
        const { sugg } = this.props
        
        return (
            <div className='each-sugg-cont'>
                    <button className='button-comments' onClick={this.toggleComments}>
                        Open comments
                    </button>
                    <div className='create-comment-cont'>
                        {this.state.commentsVisible ? (
                            <>
                        <CreateComment suggId={sugg._id}
                                createComment={this.props.createComment}
                                currentUser={this.props.currentUser}
                                openModal={this.props.openModal}
                                fetchSugg={this.props.fetchSugg}
                                fetchSuggComments={this.props.fetchSuggComments}/>
                        <SuggComments sugg={sugg}
                            comments={sugg.comments}
                            fetchSugg={this.props.fetchSugg}/>
                            </>
                        ) : null }
                </div>
            </div>
        )
    }
};

export default withRouter(Suggestion);