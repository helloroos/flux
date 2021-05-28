import React from 'react';
import UpvoteContainer from './upvote_container'

class SuggComments extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchSuggComments(this.props.sugg._id)
    // }
    
    render() {

        const { comments } = this.props.sugg
        // if (!comments) return null;
        
        let arrComments;
        debugger
        if (comments.length > 0) {
            
            arrComments = comments.map(comment => {
                
                return (
                    <div>
                        <div>{comment.author[0].firstName}</div>
                        <div>{comment.author[0].lastName}</div>
                        <div>{comment.body}</div>
                        <div><UpvoteContainer sugg={comment.suggestion}/></div>
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