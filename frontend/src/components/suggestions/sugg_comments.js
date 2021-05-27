import React from 'react';

class SuggComments extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    // componentDidMount() {
    //     this.props.fetchSuggComments(this.props.sugg._id)
    // }

    render() {

        let comments;
        debugger
        if (this.props.sugg.comments.length > 0) {
            debugger
            comments = this.props.sugg.comments.map(comment => (
            <div>
                <div>{comment.body}</div>
                <div>{comment.author}</div>
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