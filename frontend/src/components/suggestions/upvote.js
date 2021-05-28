import React from 'react';
import { withRouter } from 'react-router';

class Upvote extends React.Component {

    constructor(props) {
        super(props)
        let up = props.sugg.upvotes.length;
        let down = props.sugg.downvotes.length;
        
        this.state = {
            upvotes: props.sugg.upvotes,
            downvotes: props.sugg.downvotes,
            numUpvotes: up,
            numDownVotes: down,
            numDiff: (up - down)
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(e) {
        e.preventDefault();
        
        if (!this.state.upvotes.includes(this.props.currentUser._id)) {
            this.props.upvote(this.props.sugg._id)
                .then(this.setState({
                upvotes: this.state.upvotes.push(this.props.currentUser._id),
                numUpvotes: (this.state.numUpvotes + 1),
            }))
        } else {
            
            this.props.upvoteRemove(this.props.sugg._id)
            .then(this.setState({
                upvotes: this.state.upvotes.filter(id => id !== this.props.currentUser._id),
                numUpvotes: (this.state.numUpvotes - 1),
            }))
        }
    }

    handleDownvote(e) {
        e.preventDefault();
        
        if (!this.state.downvotes.includes(this.props.currentUser._id)) {
            this.props.downvote(this.props.sugg._id)
                .then(this.setState({
                    downvotes: this.state.downvotes.push(this.props.currentUser._id),
                    numDownVotes: (this.state.numDownVotes + 1),
                })
            )
        } else {
            this.props.downvoteRemove(this.props.sugg._id)
             .then(this.setState({
                    downvotes: this.state.downvotes.filter(id => id !== this.props.currentUser._id),
                    numDownVotes: (this.state.numDownVotes - 1),
                })
            )
        }
    }

    render() {
        console.log('renedering')
        return (
            <>
                <i onClick={this.handleUpvote} value='up' className="button-updown fas fa-arrow-alt-circle-up fa-2x"></i>
                {/* {this.state.numDiff} */}
                <i onClick={this.handleDownvote} value='down' className="button-updown fas fa-arrow-alt-circle-down fa-2x"></i>
            </>
        )
    }
};

export default Upvote;
// export default withRouter(Upvote);

