import React from 'react';
import Upvote from './upvote';
import SuggCommentsContainer from './comments_index_container';
import CreateCommentContainer from './comment_container';
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
                    <div className='each-sugg-cont'>
                        <div className='sugg-left'>
                            <p className='sugg-title'>{sugg.title}</p>
                            <p className='sugg-desc'>{sugg.description}</p>
                            <p className='sugg-budget'>{sugg.budget}</p>
                            <p className='sugg-author'>{sugg.user}</p>
                        </div>
                        <div className='create-comment-cont'>
                        {this.state.commentsVisible ? (
                            <>
                            <CreateCommentContainer sugg={sugg} />
                                    {/* // createComment={this.props.createComment}
                                    // currentUser={this.props.currentUser}
                                    // openModal={this.props.openModal}
                                    // fetchSugg={this.props.fetchSugg}
                                    // fetchSuggComments={this.props.fetchSuggComments}/> */}
                            <SuggCommentsContainer sugg={sugg} />
                                {/* comments={sugg.comments}
                                fetchSugg={this.props.fetchSugg}
                                fetchSuggComments={this.props.fetchSuggComments}/> */}
                            </>
                        ) : null }
                        </div>
                    </div>
            </div>
        )
    }
};

export default Suggestion;