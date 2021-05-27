import React from 'react';

class SuggComments extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    // componentDidMount() {
    //     this.props.fetchSugg(this.props.sugg._id)
    // }

    render() {
        if (!this.props.sugg.comments) return null;

        let comments;
        
        if (this.props.sugg.comments.length > 0) {
            
            comments = this.props.sugg.comments.map(comment => (
            <div>
                <div>{comment}</div>
                {/* <div>{comment.body}</div>
                <div>{comment.author}</div> */}
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