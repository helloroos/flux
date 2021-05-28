import React from 'react';

class SuggComments extends React.Component {
    render() {
        debugger
        if (!this.props.comments) return null;

        let comments;
        
        if (this.props.comments.length > 0) {
            
            comments = this.props.comments.map(comment => (
            <div>
                <div>{comment}</div>
            </div>
        ))
        } else {
            comments = (<div>No comments yet</div>)
        }

        return (
            <div>
                {comments}
            </div>
        )
    }
};

export default SuggComments;