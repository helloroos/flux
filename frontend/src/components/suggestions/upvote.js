import React from 'react';
import { withRouter } from 'react-router';

class Upvote extends React.Component {

    constructor(props) {
        super(props)
        let up = props.upvotes;
        let down = props.downvotes;
        let upUsers = props.users;
        let downUsers = props.users;
        let numDiff;
        debugger
        if (Object.keys(props.votes).length === 0) {
            up = 0
            down = 0
            upUsers = []
            downUsers = []
            numDiff = 0
        }

        this.state = {
            upvotesUsers: upUsers,
            downvotesUsers: downUsers,
            numUpvotes: up,
            numDownVotes: down,
            numDiff: numDiff
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(e) {
        e.preventDefault();
        this.props.upvote(this.props.sugg)
        debugger
        if (!this.state.votes) {
            this.props.upvote(this.props.sugg)
                .then(this.setState({
                upvotesUser: [this.props.currentUser._id],
                numUpvotes: (this.state.numUpvotes + 1),
                numDiff: this.state.numUpvotes - this.state.numDownVotes
            }))
        } else if (!this.state.upvotesUsers.includes(this.props.currentUser._id)) {
            this.props.upvote(this.props.sugg)
                .then(this.setState({
                upvotesUser: this.state.upvotesUsers.push(this.props.currentUser._id),
                numUpvotes: (this.state.numUpvotes + 1),
                numDiff: this.state.numUpvotes - this.state.numDownVotes
            }))
        } else {
            this.props.upvoteRemove(this.props.sugg)
            .then(this.setState({
                upvotes: this.state.upvotesUsers.filter(id => id !== this.props.currentUser._id),
                numUpvotes: (this.state.numUpvotes - 1),
                numDiff: this.state.numUpvotes - this.state.numDownVotes
            }))
        }
    }

    handleDownvote(e) {
        e.preventDefault();
        debugger
        if (!this.state.votes) {
            this.props.downvote(this.props.sugg)
                .then(this.setState({
                    downvotesUsers: [this.props.currentUser._id],
                    numDownVotes: (this.state.numDownVotes + 1),
                    numDiff: this.state.numUpvotes - this.state.numDownVotes
                })
            )
        } else  if (!this.state.downvotesUsers.includes(this.props.currentUser._id)) {
            this.props.downvote(this.props.sugg)
                .then(this.setState({
                    downvotesUsers: this.state.downvotesUsers.push(this.props.currentUser._id),
                    numDownVotes: (this.state.numDownVotes + 1),
                    numDiff: this.state.numUpvotes - this.state.numDownVotes
                })
            )
        } else {
            this.props.downvoteRemove(this.props.sugg)
             .then(this.setState({
                    downvotes: this.state.downvotesUsers.filter(id => id !== this.props.currentUser._id),
                    numDownVotes: (this.state.numDownVotes - 1),
                    numDiff: this.state.numUpvotes - this.state.numDownVotes
                })
            )
        }
    }

    render() {
        
        return (
            <>
                <i onClick={this.handleUpvote} value='up' className="button-updown fas fa-arrow-alt-circle-up fa-2x"></i>
                {this.state.numDiff}
                <i onClick={this.handleDownvote} value='down' className="button-updown fas fa-arrow-alt-circle-down fa-2x"></i>
            </>
        )
    }
};

export default Upvote;
// export default withRouter(Upvote);

