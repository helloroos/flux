import React from 'react';
import SuggCommentsContainer from './comments_index_container';
import CreateCommentContainer from './comment_container';
import UpvoteContainer from './upvote_container'


class Suggestion extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            commentsVisible: false
        }

        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments(e) {
        e.preventDefault();
        this.setState({ commentsVisible: !this.state.commentsVisible })
    }

    
    render() {
        if (!this.props.sugg) return null;
        const { sugg } = this.props;

        let visibleDelete = false;
        
        if (this.props.currentUser._id === sugg.user[0]._id) {
            visibleDelete = true
        }
        
        return (
            <div className='sugg-item-cont'>
                    <div className='each-sugg-cont'>
                        <div className='sugg-left'>
                            <p className='sugg-title'>{sugg.title}</p>
                            <div className='sugg-border'>
                            <p className='sugg-desc'>{sugg.description}</p>
                            <p className='sugg-budget'>{sugg.budget}</p>
                            <p className='sugg-author'>{sugg.user[0].firstName} {sugg.user[0].lastName}</p>
                            </div>
                        </div>
                    <div className='create-comment-cont'>
                        <button className='button-comments' onClick={this.toggleComments}>
                            Comments
                        </button>
                        {this.props.visible && (<button className='delete-sugg' onClick={() => this.props.deleteSugg(sugg._id).then(() => this.props.fetchPlanSuggs(this.props.planId))}>
                            Delete
                        </button>)}
                        <div className='voting-cont'>
                            <UpvoteContainer sugg={this.props.sugg} />
                        </div>
                    </div>
                        {this.state.commentsVisible ? (
                            <>
                            <CreateCommentContainer sugg={sugg} />
                            <SuggCommentsContainer sugg={sugg} />
                            </>
                        ) : null }
                    </div>
            </div>
        )
    }
};

export default Suggestion;