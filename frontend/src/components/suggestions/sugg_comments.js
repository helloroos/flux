import React from 'react';
import UpvoteContainer from './upvote_container'
import '../css/sugg_comments.scss'

class SuggComments extends React.Component {
    
    render() {

        const { comments } = this.props.sugg
        
        let arrComments;
        
        if (comments.length > 0) {
            
            arrComments = comments.map(comment => {
                
                return (
                    <div className='sugg-comment-cont'>
                        <div className='comment-author'>{comment.author[0].firstName} {comment.author[0].lastName}</div>
                        <div className='comment-body'>{comment.body}</div>
                    </div>
        )})
        } else {
            arrComments = (<div>No comments yet</div>)
        }

        return (
            <div>
                {arrComments}
            </div>
        )
    }
};

export default SuggComments;