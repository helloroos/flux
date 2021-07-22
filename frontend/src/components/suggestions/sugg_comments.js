import React from 'react';
// import UpvoteContainer from './upvote_container'
import '../css/sugg_comments.scss'

// const Comments = (props) => {
//     return (
//         <div>
//              {arrComments}
//         </div>
//     );
// };

// export default Comments;

class SuggComments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            deleted: false,
           
        }

    }

    componentDidMount() {
        this.props.fetchSuggComments(this.props.sugg._id)
            
    }

    render() {

        const { comments } = this.props
        if (!comments) return null;
        
        let arrComments;
        if (comments.length > 0) {
            
            
            arrComments = comments.map((comment, i) => {
                
                return (
                    <div key={`comments-${i}`} className='sugg-comment-cont'>
                        
                        {this.props.currentUser._id === comment.author[0] && (
                            <button className='delete-comments' onClick={() => this.props.deleteComment(comment._id).then(this.props.fetchSuggComments(this.props.sugg._id))}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        )}
                        <div className='comment-author'>{comment.author[0].firstName} {comment.author[0].lastName}</div>
                        <div className='comment-body'>{comment.body}</div>
                    </div>
        )})
        } else {
            arrComments = (<div className="no-comments" >No comments yet</div>)
        }

        return (
            <div>
                {arrComments}
            </div>
        )
    }
};

export default SuggComments;