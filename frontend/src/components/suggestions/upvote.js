import React from 'react';

class Upvote extends React.Component {

    constructor(props) {
        super(props)
        
        let up = props.sugg.upvotes.length;
        let down = props.sugg.downvotes.length;
        
        this.state = {
            upvotes: props.sugg.upvotes,
            numUpvotes: up,
            numDownVotes: down,
            numDiff: (up - down)
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        debugger
        if (this.state.upvotes.includes(this.props.currentUser._id)) {
            this.props.upvote(this.props.suggId)
            this.setState({
                upvotes: this.state.upvotes.push(this.props.currentUser._id),
                numUpvotes: (this.state.numUpvotes + 1),
            })
        } else {
            this.props.upvoteRemove(this.props.suggId)
            this.setState({
                upvotes: this.state.upvotes.filter(id => id !== this.props.currentUser._id),
                numUpvotes: (this.state.numUpvotes - 1),
            })
        }
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <button onClick={this.handleClick}>
                    up
=======
                <button>
                    {/* {this.props.sugg} */}
>>>>>>> main
                </button>
                {this.state.numDiff}
            </div>
        )
    }
};

export default Upvote;