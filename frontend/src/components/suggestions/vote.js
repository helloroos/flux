import React from 'react';

class Vote extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            changed: false
        }

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(e) {
        e.preventDefault();
        const { votes } = this.props;
        const { sugg } = this.props;
        const { currentUser } = this.props;
        let suggVotes = votes[sugg];
        
        if (suggVotes && suggVotes.upUsers.includes(currentUser._id)) {
            this.props.upvoteRemove(sugg)
                .then(this.setState({ changed: !this.state.changed }))
        } else {
            this.props.upvote(this.props.sugg)
                .then(this.setState({ changed: !this.state.changed }))
        }
    }

    handleDownvote(e) {
        e.preventDefault();
        const { votes } = this.props;
        const { sugg } = this.props;
        const { currentUser } = this.props;
        let suggVotes = votes[sugg];
        
        if (suggVotes && suggVotes.downUsers.includes(currentUser._id)) {
            this.props.downvoteRemove(sugg)
                .then(this.setState({ changed: !this.state.changed }))
        } else {
            this.props.downvote(sugg)
                .then(this.setState({ changed: !this.state.changed }))
        }
    }

    render() {

        const { votes } = this.props;
        const { sugg } = this.props;
        let suggVotes = votes[sugg];
        let votesNum;
        if (suggVotes) {
            votesNum = suggVotes.upvotes - suggVotes.downvotes
        } else {
            votesNum = 0;
        }
        
        
        return (
            <>
                <i onClick={this.handleUpvote} value='up' className="button-updown fas fa-arrow-alt-circle-up fa-2x"></i>
                <h5 className='vote-count'>{votesNum}</h5>
                <i onClick={this.handleDownvote} value='down' className="button-updown fas fa-arrow-alt-circle-down fa-2x"></i>
            </>
        )
    }

}

export default Vote;